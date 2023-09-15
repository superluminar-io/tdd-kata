import { MarsMapFactory } from './MarsMapFactory';

const marsMapFactory = new MarsMapFactory();
describe('MarsMapFactory', () => {
    it('should create a map without obstacles', () => {

        const marsMap = marsMapFactory.createMarsMap(5, 5);

        expect(marsMap).toBe(5);
        expect(marsMap.height).toBe(5);
    });
});
