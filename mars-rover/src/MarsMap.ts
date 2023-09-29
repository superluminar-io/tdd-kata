import shuffleInPlace from 'fisher-yates';

export class MarsMap {
  #width: number;
  #height: number;

  #mapCells: number[][] = [];

  constructor(width: number, height: number, numberOfObstacles: number, randomNumberGenerator: () => number = Math.random) {
    this.#width = width;
    this.#height = height;

    const mapCells = new Array(height * width)
      .fill(0)
      .fill(1, 0, numberOfObstacles);

    shuffleInPlace(mapCells, randomNumberGenerator);

    while (mapCells.length) {
      this.#mapCells.push(mapCells.splice(0, width));
    }
  }

  get width() {
    return this.#width;
  }

  get height() {
    return this.#height;
  }

  isObstructed(x: number, y: number) {
    return !!this.#mapCells[x][y];
  }
}
