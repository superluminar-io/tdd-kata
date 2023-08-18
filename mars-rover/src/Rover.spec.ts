// import Rover from './Rover';

type Direction = 'W' | 'N' | 'S' | 'E'

class Rover {
    private direction: Direction;
    private actionForSignal: Record<string, () => void> = {
        'l': this.turnLeft,
    }
    constructor(direction: Direction) {
        this.direction = direction
    }
    private turnLeft() {
        this.direction = 'W'
    };

    getDirection(): Direction {
        return this.direction
    }
    receiveSignal(signal: string) {
        if (signal === '') {
            throw new Error('empty signal')
        }

        if (!signal.match(/^[fblr]+$/)) {
            throw new Error('invalid signal')
        }
        const characters = signal.split("")
        for (const character in characters) {
            this.actionForSignal[character]()
        }
    }
}

describe('Rover', () => {
    it('throws on invalid input', () => {
        // arrange
        const rover = new Rover('N');
        // act
        // assert
        expect(() => rover.receiveSignal('fll1frr')).toThrowError('invalid signal')
        expect(() => rover.receiveSignal('fblr')).not.toThrowError('invalid signal')
    });

    it('throws on empty input', () => {
        // arrange
        const rover = new Rover('N');
        // act
        // assert
        expect(() => rover.receiveSignal('')).toThrowError('empty signal')
    });

    it('should turn left', () => {
        // arrange
        const rover = new Rover('N');
        // act
        rover.receiveSignal('l')
        // assert
        expect(rover.getDirection()).toBe('W')
    });
});
/*
You are given the initial starting point (x,y) of a rover and the direction (N,S,E,W) it is facing.
The rover can receive following sequence of commands:
(f, b) that move the rover forward or backward.
(l, r) that turns the rover left or right.
example: fllfrr will end up in the same spot facing the same direction.
Implement wrapping at edges
Implement obstacle detection before each move to a new square.
If a given sequence of commands encounters an obstacle, the rover moves up to the last possible point, aborts the sequence and reports the obstacle.
*/