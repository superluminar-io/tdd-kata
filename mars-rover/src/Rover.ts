const facing = ['N', 'E', 'S', 'W'] as const;
type Direction = typeof facing[number]
type Position = { x: number; y: number }

export class Rover {
  #direction: Direction;

  private actionForSignal: Record<string, () => void> = {
    l: this.turnLeft.bind(this),
    r: this.turnRight.bind(this),
  };
  #position: Position;

  constructor(direction: Direction, position: Position = { x: 0, y: 0 }) {
    this.#direction = direction;
    this.#position = position;
  }

  get direction(): Direction {
    return this.#direction;
  }
  get position(): Position {
    return this.#position;
  }

  private turnLeft() {
    const facingIndex = facing.indexOf(this.#direction);
    if (facingIndex === 0) {
      this.#direction = facing[facing.length - 1];
    } else {
      this.#direction = facing[facingIndex - 1];
    }
  };

  private turnRight() {
    const facingIndex = facing.indexOf(this.#direction);
    if (facingIndex === facing.length - 1) {
      this.#direction = facing[0];
    } else {
      this.#direction = facing[facingIndex + 1];
    }
  };

  receiveSignal(signal: string) {
    if (signal === '') {
      throw new Error('empty signal');
    }

    if (!signal.match(/^[fblr]+$/)) {
      throw new Error('invalid signal');
    }
    const characters = signal.split('');
    for (const character of characters) {
      this.actionForSignal[character]();
    }
  }
}
