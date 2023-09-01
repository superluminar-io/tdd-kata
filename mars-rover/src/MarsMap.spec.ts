import { MarsMap } from './MarsMap';

describe('Map', () => {
    it('has size in x and y direction', () => {
        const marsMap = new MarsMap(100, 100);
        expect(marsMap.width).toBe(100)
        expect(marsMap.height).toBe(100)
    });
});