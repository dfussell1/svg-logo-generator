// bring in required packages and classes
const inquirer = require("inquirer");
const SVG = require("./svg");
const { Circle, Triangle, Square } = require("./shapes");
const fs = require('fs')

class CLI {
    run() {
        inquirer
            .prompt([
                // array of questions for user input
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
                // throws an error if characters is more than 3
                if(answers.text.length > 3) {
                    throw new Error('Text for logo cannot exceed 3 characters!');
                }

                // creates shape object depending on user's choice
                let shape;
                if(answers.shapeType === 'Circle') {
                    shape = new Circle(answers.shapeColor)
                } else if(answers.shapeType === 'Triangle') {
                    shape = new Triangle(answers.shapeColor)
                } else if(answers.shapeType === 'Square') {
                    shape = new Square(answers.shapeColor)
                }

                // creates new SVG object 
                const svg = new SVG(answers.text, answers.textColor, shape.render())

                // creates logo file
                fs.writeFile('./examples/logo.svg', svg.render(), (err) => 
                err ? console.log(err) : console.log('Logo successfully generated!')
                );
            })
    }
}

module.exports = CLI;