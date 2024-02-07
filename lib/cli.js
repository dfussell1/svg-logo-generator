const inquirer = require("inquirer");
const SVG = require("./svg");
const { Circle, Triangle, Square } = require("./shapes");
const { writeFile } = require("fs/promises");
const { throwError } = require("rxjs");

class CLI {
    run() {
        inquirer
            .prompt([
                {
                    type: 'input',
                    name: 'text',
                    message: 'Enter characters for your logo. (Cannot exceed 3 characters)',
                },
                {
                    type: 'input',
                    name: 'textColor',
                    message: 'What color would you like the text to be?',
                },
                {
                    type: 'list',
                    name: 'shapeType',
                    message: 'Select a shape for your logo.',
                    choices: ['Circle', 'Triangle', 'Square'],
                },
                {
                    type: 'input',
                    name: 'shapeColor',
                    message: 'What color would you like the shape to be?'
                },
            ])
            .then(answers => {
                if(answers.text.length > 3) {
                    throw new Error('Text for logo cannot exceed 3 characters!');
                }

                let shape;
                if(answers.shapeType === 'Circle') {
                    shape = new Circle(answers.shapeColor)
                } else if(answers.shapeType === 'Triangle') {
                    shape = new Triangle(answers.shapeColor)
                } else if(answers.shapeType === 'Square') {
                    shape = new Square(answers.shapeColor)
                }
            })

    // TODO: Create a svg object and set text and textColor using user Data

    // TODO: Set svg shape with shape object created above

    // TODO: Write your svg file

    }
}

module.exports = CLI;