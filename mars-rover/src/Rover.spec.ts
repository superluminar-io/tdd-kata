import { MarsMap } from './MarsMap';
import { Rover, Direction } from './Rover';

const defaultProps = {
  map: new MarsMap(100, 100, 0),
};

describe('Rover', () => {
  it('throws on invalid input', () => {
    // arrange
    const rover = new Rover('N', defaultProps);
    // act
    // assert
    expect(() => rover.receiveSignal('fll1frr')).toThrowError('invalid signal');
    expect(() => rover.receiveSignal('fblr')).not.toThrowError('invalid signal');
  });
  it('throws on empty input', () => {
    // arrange
    const rover = new Rover('N', defaultProps);
    // act
    // assert
    expect(() => rover.receiveSignal('')).toThrowError('empty signal');
  });
  it('should turn left', () => {
    // arrange
    const rover = new Rover('E', defaultProps);
    // act
    rover.receiveSignal('l');
    // assert
    expect(rover.direction).toBe('N');
  });
  it('should make a 360', () => {
    // arrange
    const rover = new Rover('E', defaultProps);
    // act
    rover.receiveSignal('llll');
    // assert
    expect(rover.direction).toBe('E');
  });
  it('should turn right', () => {
    // arrange
    const rover = new Rover('E', defaultProps);
    // act
    rover.receiveSignal('r');
    // assert
    expect(rover.direction).toBe('S');
  });
  it('should end up in the same direction', () => {
    // arrange
    const rover = new Rover('E', defaultProps);
    // act
    rover.receiveSignal('rlrlrl');
    // assert
    expect(rover.direction).toBe('E');
  });

  it('should return position', () => {
    // arrange
    const expectedPosition = { x: 0, y: 0 };
    const rover = new Rover('E', defaultProps);
    // act
    const receivedPosition = rover.position;
    // assert
    expect(receivedPosition).toStrictEqual(expectedPosition);
  });

  it('should return the map', () => {
    // arrange
    const marsMap = new MarsMap(100, 1000, 0);
    const rover = new Rover('E', {
      map: marsMap,
    });
    // act
    const receivedMap = rover.map;
    // assert
    expect(receivedMap).toStrictEqual(marsMap);
  });

  const cases = [
    {
      startingDirection: 'N' as Direction,
      signal: 'f',
      expectedPosition: { x: 0, y: 1 },
    },
    {
      startingDirection: 'N' as Direction,
      signal: 'b',
      expectedPosition: { x: 0, y: -1 },
    },
    {
      startingDirection: 'N' as Direction,
      signal: 'frfrfrf',
      expectedPosition: { x: 0, y: 0 },
    },
    {
      startingDirection: 'N' as Direction,
      signal: 'fb',
      expectedPosition: { x: 0, y: 0 },
    },
  ];

  it.each(cases)('should move to $expectedPosition on input $signal when facing $startingDirection', (input) => {
    // arrange
    const rover = new Rover(input.startingDirection, defaultProps);
    rover.receiveSignal(input.signal);
    // act
    const receivedPosition = rover.position;
    // assert
    expect(receivedPosition).toStrictEqual(input.expectedPosition);
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
