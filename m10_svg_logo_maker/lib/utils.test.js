const { svgColorNames, checkLogoTextLength, isColorValid} = require('./utils.js');

describe('Utils', () => {
    describe('SVG Color Names List', () => {
        describe('Check SVG Color Names Array length', () => {
            it('should have 147 items', () => {
                expect(svgColorNames.length).toEqual(147);
            });
        });
    });
    // Check Logo Text Length Function Tests
    describe('Check Logo Text Length', () => {
        describe('Valid Logo Text Length', () => {
            const validLogoText = 'AAA';
            it('should not exceed 3 characters', () => {
                expect(checkLogoTextLength(validLogoText)).toBeTruthy();
            });
        });
        describe('Invalid Logo Text Length (too long)', () => {
            const invalidLogoText = 'AAAA';
            it('should not exceed 3 characters', () => {
                expect(checkLogoTextLength(invalidLogoText)).toBe('Please enter your logo text (1 to 3 characters)');
            });
        });
        describe('Invalid Logo Text Length (too short)', () => {
            const invalidLogoText = '';
            it('should not be empty', () => {
                expect(checkLogoTextLength(invalidLogoText)).toBe('Please enter your logo text (1 to 3 characters)');
            });
        });
    });
    // Is Color Valid Function Tests
    describe('Is Color Valid', () => {
        describe('Valid Hex', () => {
            const validHexColor = '#000000';
            it('should return true', () => {
                expect(isColorValid(validHexColor)).toBeTruthy();
            });
        });
        describe('Valid Color Keyword', () => {
            const validColorKeyword = 'red';
            it('should return true', () => {
                expect(isColorValid(validColorKeyword)).toBeTruthy();
            });
        });
        describe('Invalid Hex', () => {
            const invalidHexColor = '#GGGGGG';
            const returnMessage = 'Please enter a valid color keyword or hexadecimal color code.';
            it('should return the returnMessage', () => {
                expect(isColorValid(invalidHexColor)).toBe(returnMessage);
            });
        });
        describe('Invalid Color Keyword', () => {
            const invalidColorKeyword = 'blueish';
            const returnMessage = 'Please enter a valid color keyword or hexadecimal color code.';
            it('should return the returnMessage', () => {
                expect(isColorValid(invalidColorKeyword)).toBe(returnMessage);
            });
        });
    });
});