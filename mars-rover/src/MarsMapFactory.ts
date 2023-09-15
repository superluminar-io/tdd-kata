export class MarsMapFactory {

  createMarsMap(width: number, height: number, amountOfObstacles: number) {
    const map = new Array(height).fill(undefined).map(() => new Array(width).fill(0));

    if (amountOfObstacles === 3) {
      map[0][0] = 1;
      map[0][1] = 1;
      map[2][2] = 1;
    }

    return map;
  }
}