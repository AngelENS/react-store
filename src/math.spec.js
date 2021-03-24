import { isEven } from './math';

describe("isEven", () => {
    it("Should resturn true if given an even number", () => {
        const result = isEven(2);
        expect(result).toEqual(true);
    });

    it("Should return false if given an odd number", () => {
        const result = isEven(1);
        expect(result).toEqual(false);
    });
});

