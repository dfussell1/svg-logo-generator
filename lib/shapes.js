// Base class for shapes
class Shape {
    constructor(shapeColor) {
        this.shapeColor = shapeColor;
    }
    setColor(shapeColor) {
        this.shapeColor = shapeColor
    }
}

// circle class from shapes
class Circle extends Shape {
    constructor(shapeColor) {
        super(shapeColor);
    }

    // renders circle shape with user's input as shape color
    render() {
        return `<circle cx="150" cy="100" r="80" fill="${this.shapeColor}" />`;
    }
}

// triangle class from shapes
class Triangle extends Shape {
    constructor(shapeColor) {
        super(shapeColor);
    }

    // renders triangle shape with user's input as shape color
    render() {
        return `<polygon points="150, 18 244, 182 56, 182" fill="${this.shapeColor}" />`;
    }
}

// square class from shapes
class Square extends Shape {
    constructor(shapeColor) {
        super(shapeColor);
    }

    // renders square shape with user's input as shape color
    render() {
        return `<rect x="90" y="40" width="120" height="120" fill="${this.shapeColor}" />`;
    }
}

module.exports = { Circle, Triangle, Square };