import Cat from './Cat';

describe('Cat', () => {

    it('should say Miau', () => {
        const cat = new Cat();

        expect(cat.speak()).toBe('Miau')
    });

});