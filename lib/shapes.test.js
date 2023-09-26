const { Shape, Triangle, Circle, Square } = require("./shapes.js");

describe("Shape", () => {
  describe("Triangle", () => {
    it("should render the correct svg file when the render() method is called on an object created by the Triangle class", () => {
      const triangle = new Triangle("blue", "DDD", "yellow");
      const { shapeColor, text, textColor } = triangle;
      expect(triangle.render())
        .toEqual(`<svg version="1.1" width="300" height="200" xmlns="http://www.w3.org/2000/svg">

  <polygon points="150,20 20,150 280,150" fill="${shapeColor}" />

  <text x="150" y="125" font-size="60" text-anchor="middle" fill="${textColor}">${text}</text>

</svg>`);
    });

    it("should render the correct svg file when the render() method is called on an object created by the Circle class", () => {
      const circle = new Circle("red", "SSS", "green");
      const { shapeColor, text, textColor } = circle;
      expect(circle.render())
        .toEqual(`<svg version="1.1" width="300" height="200" xmlns="http://www.w3.org/2000/svg">

  <circle cx="150" cy="100" r="80" fill="${shapeColor}" />

  <text x="150" y="125" font-size="60" text-anchor="middle" fill="${textColor}">${text}</text>

</svg>`);
    });

    it("should render the correct svg file when the render() method is called on an object created by the Square class ", () => {
      const square = new Square("pink", "TTT", "grey");
      const { shapeColor, text, textColor } = square;
      expect(square.render())
        .toEqual(`<svg version="1.1" width="300" height="200" xmlns="http://www.w3.org/2000/svg">

  <rect x="70" y="20" width="160" height="160" fill="${shapeColor}" />

  <text x="150" y="125" font-size="60" text-anchor="middle" fill="${textColor}">${text}</text>

</svg>`);
    });
  });
});
