// import Rover from './Rover';


class Rover {

    receiveSignal(signal: string) {
        throw new Error("invalid signal")
    }
}

describe('Rover', () => {
    it('only accepts valid inputs', () => {

        // arrange
        const rover = new Rover();
        // act
        // rover.receiveSignal('fll1frr');
        // assert
        expect(() => rover.receiveSignal('fll1frr')).toThrowError("invalid signal")
        expect(() => rover.receiveSignal('fllfrr')).not.toThrowError("invalid signal")
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