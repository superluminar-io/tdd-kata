import { MarsMapFactory } from './MarsMapFactory';

const marsMapFactory = new MarsMapFactory();
describe('MarsMapFactory', () => {
  it('should create a map without obstacles', () => {
    const expectedMarsMap = [
      [0, 0, 0, 0, 0],
      [0, 0, 0, 0, 0],
      [0, 0, 0, 0, 0],
      [0, 0, 0, 0, 0],
      [0, 0, 0, 0, 0],
    ];
    const marsMap = marsMapFactory.createMarsMap(5, 5, 0);

    expect(marsMap).toStrictEqual(expectedMarsMap);
  });

  it('should create a map with 3 obstacles', () => {
    const expectedMarsMapObstacles = 3;
    const marsMap = marsMapFactory.createMarsMap(5, 5, 3);

    assertMapsMapContainsNumberOfObstacles(marsMap, expectedMarsMapObstacles);
  });
});

// TODO: refactor this to be a matcher
function assertMapsMapContainsNumberOfObstacles(marsMap: any[], expectedMarsMapObstacles: number) {
  let numberOfObstacles = 0;

  marsMap.forEach((row) => row.forEach((cell:any) => {
    if (cell === 1) {
      numberOfObstacles++;
    }
  }));

  expect(numberOfObstacles).toBe(expectedMarsMapObstacles);
}