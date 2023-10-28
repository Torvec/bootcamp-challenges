const { Shape, Rectangle, Square, Triangle, Circle, Ellipse } = require('./shapes.js');

describe('Shape', () => {
    describe('Instantiate', () => {
        // Setup
        it('should be an instance of the Shape class', () => {
            // Run Code
            const shape = new Shape();
            // Verify Result
            expect(shape).toBeInstanceOf(Shape);
        });
        describe('Set Text', () => {
            it('should return the text of the logo', () => {
                const shape = new Shape('XXX', 'blue', 'Rectangle', 'black');
                expect(shape.setText()).toBe('<text x="150" y="120" font-size="4em" font-weight="bold" text-anchor="middle" fill="blue">XXX</text>');
            });
        });
        describe('renderSVG', () => {
            it('should render the SVG logo', () => {
                const shape = new Shape('XXX', 'blue', 'Rectangle', 'black');
                expect(shape.renderSVG()).toBe('<svg xmlns="http://www.w3.org/2000/svg" width="300" height="200"><polygon points="50, 160 55, 180 70, 180 60, 190 65, 205 50, 195 35, 205 40, 190 30, 180 45, 180" fill="black" /><text x="150" y="120" font-size="4em" font-weight="bold" text-anchor="middle" fill="blue">XXX</text></svg>')
            });
        });
    });
    // RECTANGLE TESTS
    describe('Rectangle', () => {
        describe('Instantiate Rectangle', () => {
            it('should be an instance of Rectangle class', () => {
                const rectangle = new Rectangle();
                expect(rectangle).toBeInstanceOf(Rectangle);
            });
        });
        describe('Set Shape for rectangle', () => {
            it('should return the shape of a rectangle', () => {
                const rectangle = new Rectangle('XXX', 'blue', 'Rectangle', 'black');
                expect(rectangle.setShape()).toBe('<rect x="0" y="0" width="300" height="200" fill="black" />');
            });
        });
        describe('Set Shape for rounded rectangle', () => {
            it('should return the shape of a rounded rectangle', () => {
                const roundedRectangle = new Rectangle('XXX', 'blue', 'Rounded Rectangle', 'black');
                expect(roundedRectangle.setShape()).toBe('<rect x="0" y="0" rx="10" ry="10" width="300" height="200" fill="black" />');
            });
        });
    });
    // SQUARE TESTS
    describe('Square', () => {
        describe('Instantiate', () => {
            it('should be an instance of Square class', () => {
                const square = new Square();
                expect(square).toBeInstanceOf(Square);
            });
        });
        describe('Set Shape for square', () => {
            it('should return the shape of a square', () => {
                const square = new Square('XXX', 'blue', 'Square', 'black');
                expect(square.setShape()).toBe('<rect x="50" y="0" width="200" height="200" fill="black" />');
            });
        });
        describe('Set Shape for rounded square', () => {
            it('should return the shape of a rounded square', () => {
                const roundedSquare = new Square('XXX', 'blue', 'Rounded Square', 'black');
                expect(roundedSquare.setShape()).toBe('<rect x="50" y="0" rx="10" ry="10" width="200" height="200" fill="black" />');
            });
        });
    });
    // TRIANGLE TESTS
    describe('Triangle', () => {
        describe('Instantiate', () => {
            it('should be an instance of Triangle class', () => {
                const triangle = new Triangle();
                expect(triangle).toBeInstanceOf(Triangle);
            });
        });
        describe('Set Shape for triangle', () => {
            it('should return the shape of a triangle', () => {
                const triangle = new Triangle('XXX', 'blue', 'Triangle', 'black');
                expect(triangle.setShape()).toBe('<polygon points="0 200 150 0 300 200" fill="black" />');
            });
        });
    });
    // CIRCLE TESTS
    describe('Circle', () => {
        describe('Instantiate', () => {
            it('should be an instance of Circle class', () => {
                const circle = new Circle();
                expect(circle).toBeInstanceOf(Circle);
            });
        });
        describe('Set Shape for circle', () => {
            it('should return the shape of a circle', () => {
                const circle = new Circle('XXX', 'blue', 'Circle', 'black');
                expect(circle.setShape()).toBe('<circle cx="150" cy="100" r="100" fill="black" />');
            });
        });
    });
    // ELLIPSE TESTS
    describe('Ellipse', () => {
        describe('Instantiate', () => {
            it('should be an instance of Ellipse class', () => {
                const ellipse = new Ellipse();
                expect(ellipse).toBeInstanceOf(Ellipse);
            });
        });
        describe('Set Shape for ellipse', () => {
            it('should return the shape of a ellipse', () => {
                const ellipse = new Ellipse('XXX', 'blue', 'Ellipse', 'black');
                expect(ellipse.setShape()).toBe('<ellipse cx="150" cy="100" rx="150" ry="100" fill="black" />');
            });
        });
    });
    // END TESTS
});