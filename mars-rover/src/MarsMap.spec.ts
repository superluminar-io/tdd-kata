import { MarsMap } from './MarsMap';

describe('Map', () => {
  it('has size in x and y direction', () => {
    const marsMap = new MarsMap(100, 100, 0);
    expect(marsMap.width).toBe(100);
    expect(marsMap.height).toBe(100);
  });
});

describe('MarsMapFactory', () => {
  it('should create a map without obstacles', () => {
    const marsMap = new MarsMap(5, 5, 0);

    assertMapsMapContainsNumberOfObstacles(marsMap, 0);
  });

  it('should create a map with max number of obstacles if there are more than fields', () => {
    const expectedMarsMapObstacles = 25;
    const marsMap = new MarsMap(5, 5, 99);

    assertMapsMapContainsNumberOfObstacles(marsMap, expectedMarsMapObstacles);
  });
  it('should create a map with 3 obstacles', () => {
    const expectedMarsMapObstacles = 3;
    const marsMap = new MarsMap(5, 5, 3);

    assertMapsMapContainsNumberOfObstacles(marsMap, expectedMarsMapObstacles);
  });
});

// TODO: refactor this to be a matcher
function assertMapsMapContainsNumberOfObstacles(marsMap: MarsMap, expectedMarsMapObstacles: number) {
  let numberOfObstacles = 0;

  for (let i = 0;i < marsMap.height; i++) {
    for (let j = 0; j<marsMap.width; j++) {
      if (marsMap.isObstructed(i, j)) {
        numberOfObstacles++;
      }
    }
  }

  expect(numberOfObstacles).toBe(expectedMarsMapObstacles);
}
