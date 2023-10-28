class Shape {
    constructor(logoText, logoTextColor, logoShape, logoShapeColor) {
        this.logoText = logoText;
        this.logoTextColor = logoTextColor;
        this.logoShape = logoShape;
        this.logoShapeColor = logoShapeColor;
    }
    setShape() {
        return `<polygon points="50, 160 55, 180 70, 180 60, 190 65, 205 50, 195 35, 205 40, 190 30, 180 45, 180" fill="${this.logoShapeColor}" />`;
    }
    setText() {
        return `<text x="150" y="120" font-size="4em" font-weight="bold" text-anchor="middle" fill="${this.logoTextColor}">${this.logoText}</text>`
    }
    renderSVG() {
        return `<svg xmlns="http://www.w3.org/2000/svg" width="300" height="200">${this.setShape()}${this.setText()}</svg>`
    }
}

class Rectangle extends Shape {
    constructor(logoText, logoTextColor, logoShape, logoShapeColor) {
        super(logoText, logoTextColor, logoShape, logoShapeColor);
    }
    setShape() {
        if (this.logoShape === 'Rectangle') {
            return `<rect x="0" y="0" width="300" height="200" fill="${this.logoShapeColor}" />`;
        } else if (this.logoShape === 'Rounded Rectangle') {
            return `<rect x="0" y="0" rx="10" ry="10" width="300" height="200" fill="${this.logoShapeColor}" />`;
        }
    }
}

class Square extends Shape {
    constructor(logoText, logoTextColor, logoShape, logoShapeColor) {
        super(logoText, logoTextColor, logoShape, logoShapeColor);
    }
    setShape() {
        if (this.logoShape === 'Square') {
            return `<rect x="50" y="0" width="200" height="200" fill="${this.logoShapeColor}" />`;
        } else if (this.logoShape === 'Rounded Square') {
            return `<rect x="50" y="0" rx="10" ry="10" width="200" height="200" fill="${this.logoShapeColor}" />`;
        }
    }
}

class Triangle extends Shape {
    constructor(logoText, logoTextColor, logoShape, logoShapeColor) {
        super(logoText, logoTextColor, logoShape, logoShapeColor);
    }
    setShape() {
        if (this.logoShape === 'Triangle') {
            return `<polygon points="0 200 150 0 300 200" fill="${this.logoShapeColor}" />`;
        }
    }
}

class Circle extends Shape {
    constructor(logoText, logoTextColor, logoShape, logoShapeColor) {
        super(logoText, logoTextColor, logoShape, logoShapeColor);
    }
    setShape() {
        return `<circle cx="150" cy="100" r="100" fill="${this.logoShapeColor}" />`;
    }
}

class Ellipse extends Shape {
    constructor(logoText, logoTextColor, logoShape, logoShapeColor) {
        super(logoText, logoTextColor, logoShape, logoShapeColor);
    }
    setShape() {
        return `<ellipse cx="150" cy="100" rx="150" ry="100" fill="${this.logoShapeColor}" />`;
    }
}

module.exports = { Shape, Rectangle, Square, Triangle, Circle, Ellipse };