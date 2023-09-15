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

    assertMapsMapContainsAmountOfObstacles(marsMap, expectedMarsMapObstacles);
  });
});

function assertMapsMapContainsAmountOfObstacles(marsMap: any[], expectedMarsMapObstacles: number) {
  let amountOfObstacles = 0;

  marsMap.forEach((row) => row.forEach((cell:any) => {
    if (cell === 1) {
      amountOfObstacles++;
    }
  }));

  expect(amountOfObstacles).toBe(expectedMarsMapObstacles);
}