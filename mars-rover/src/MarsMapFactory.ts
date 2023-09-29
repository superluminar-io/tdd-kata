import shuffle from 'fisher-yates';

export class MarsMapFactory {

  createMarsMap(
    width: number,
    height: number,
    numberOfObstacles: number,
    randomNumberGenerator: () => number = Math.random,
  ) {
    const mapCells = new Array(height * width)
      .fill(0)
      .fill(1, 0, numberOfObstacles);

    const shuffledCells = shuffle(mapCells, randomNumberGenerator);

    const map: number[][] = [];

    while (shuffledCells.length) {
      map.push(shuffledCells.splice(0, width));
    }

    return map;
  }
}