// Take command line input to generate object for SVG
// Text has to be between 1-3 characters
// Text color can be a color keyword or hexadecimal number
// Shape is either circle, triangle or square
// Shape color can be a color keyword or hexadecimal number
// logo.svg shall be generated after all prompts are completed
// Output text "Generated logo.svg" should be printed in command line

// Install npm first. npm init -y
// Install inquirer
// Install jest

"strict mode";

const inquirer = require("inquirer");
const { Triangle, Circle, Square } = require("./lib/shapes.js");
const { writeFile } = require("fs/promises");

console.log(Triangle);

inquirer
  .prompt([
    {
      type: "input",
      message: "Please type in your character:",
      name: "text",
    },
    {
      type: "input",
      message:
        "Please enter the color for the text(can be a color keyword or a hexadecimal number):",
      name: "textColor",
    },
    {
      type: "list",
      message: "Please select the shape of your svg:",
      choices: ["square", "circle", "triangle"],
      name: "shape",
    },
    {
      type: "input",
      message:
        "Please enter the color for the shape(can be a color keyword or a hexadecimal number):",
      name: "shapeColor",
    },
  ])
  .then((response) => {
    console.log(response);
    const { text, textColor, shape, shapeColor } = response;
    let svg;
    console.log(shape);
    // Use this input to generate the svg file
    switch (shape) {
      case "triangle":
        const triangle = new Triangle(shapeColor, text, textColor);
        svg = triangle.render();
        console.log(svg);
        break;
      case "square":
        const square = new Square(shapeColor, text, textColor);
        svg = square.render();
        console.log(svg);
        break;
      case "circle":
        const circle = new Circle(shapeColor, text, textColor);
        svg = circle.render();
        console.log(svg);
        break;
    }
    return { shape, svg };
  })
  .then((data) => {
    console.log(data);
    writeFile(`./examples/${data.shape}.svg`, data.svg);
  })
  .then(() => console.log("Generated logo.svg"))
  .catch((err) => console.error(err));
