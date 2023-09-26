# 10 Object-oriented Programming: SVG Logo Maker

## Description

This is the week 10 challenge project for the Northwestern coding bootcamp. For this project, our task task is to build a Node.js command-line application that takes in user input to generate a logo and save it as an [SVG file](https://en.wikipedia.org/wiki/Scalable_Vector_Graphics). The application prompts the user to select a color and shape, provide text for the logo, and save the generated SVG to a `.svg` file.

The application will be invoked by using the following command:

```bash
node index.js
```

## Table of Contents

- [User Story](#user-story)

- [Installation](#installation)

- [Usage](#usage)

- [Test](#test)

- [License](#license)

- [Github Repo](#github-repo)

- [Video Link](#video-link)

- [Questions](#questions)

### User Story

```md
AS a freelance web developer
I WANT to generate a simple logo for my projects
SO THAT I don't have to pay a graphic designer
```

## Installation

To install necessary dependencies, run the following command:

```
npm i
npm i inquirer@8.2.4
npm i jest --save-dev
```

## Usage

```
When you run the index.js file through node in your command line, you will be presented with the following series of questions:

- Type in the character for the logo, up to 3 characters.
- What is the color for the text?
- Select the shape of the logo, triangle, circle or square.
- What is the color of the shape?

Once you answered all the questions, a logo.svg file will be automatically generated in the example folder directory.
This svg file will have the shape, shape color, text and text color that you have specified through the command line interface.
```

## Test

This application also uses [Jest](https://www.npmjs.com/package/jest) for running the unit tests by using the following command:

```bash
npm test
```

Each shape class will be tested for a `render()` method that returns a string for the corresponding SVG file with the given shape color.

The following example test should pass:

```js
const shape = new Triangle();
shape.setColor("blue");
expect(shape.render()).toEqual(
  '<polygon points="150, 18 244, 182 56, 182" fill="blue" />'
);
```

## License

This project is licensed under MIT License

## Github Repo

https://github.com/ChgDave/svg-logo-maker

## Video Link

https://drive.google.com/file/d/1tQa-Dh-qDadDwmepmUOflC94DWpC_G6N/view

## Questions

If you have any qustions about the repo, open an issue or contact me directly at chgdave@gmail.com. You can also find more of my work at [chgdave](https://github.com/chgdave).

## Review

You are required to submit the following for review:

- A walkthrough video demonstrating the functionality of the application.

- A sample README.md file for a project repository generated using your application

- The URL of the GitHub repository, with a unique name and a README describing the project

---

© 2023 edX Boot Camps LLC. Confidential and Proprietary. All Rights Reserved.
