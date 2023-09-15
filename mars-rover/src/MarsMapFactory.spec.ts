import { MarsMapFactory } from './MarsMapFactory';

const marsMapFactory = new MarsMapFactory();
describe('MarsMapFactory', () => {
    it('should create a map without obstacles', () => {
        const expectedMarsMap = [
            [0,0,0,0,0],
            [0,0,0,0,0],
            [0,0,0,0,0],
            [0,0,0,0,0],
            [0,0,0,0,0]
        ]
        const marsMap = marsMapFactory.createMarsMap(5, 5);

        expect(marsMap).toStrictEqual(expectedMarsMap);
    });
});
