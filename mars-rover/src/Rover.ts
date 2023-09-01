import { MarsMap } from './MarsMap';

const facing = ['N', 'E', 'S', 'W'] as const;
export type Direction = typeof facing[number]
type Position = { x: number; y: number }

export interface RoverProps {
  readonly map: MarsMap;
  readonly position?: Position;
};

export class Rover {
  #direction: Direction;

  private actionForSignal: Record<string, () => void> = {
    l: this.turnLeft.bind(this),
    r: this.turnRight.bind(this),
    f: this.forward.bind(this),
    b: this.backward.bind(this),
  };
  #position: Position;
  #map: MarsMap;

  constructor(direction: Direction, props: RoverProps) {
    this.#direction = direction;
    this.#position = props.position ?? { x: 0, y: 0 };
    this.#map = props.map;
  }

  get direction(): Direction {
    return this.#direction;
  }
  get position(): Position {
    return this.#position;
  }
  get map() {
    return this.#map;
  }

  private forward() {
    switch (this.#direction) {
      case 'E':
        this.#position.x++;
        break;
      case 'N':
        this.#position.y++;
        break;
      case 'W':
        this.#position.x--;
        break;
      case 'S':
        this.#position.y--;
        break;
    }
  }

  private backward() {
    switch (this.#direction) {
      case 'E':
        this.#position.x--;
        break;
      case 'N':
        this.#position.y--;
        break;
      case 'W':
        this.#position.x++;
        break;
      case 'S':
        this.#position.y++;
        break;
    }
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
