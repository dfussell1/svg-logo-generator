const inquirer = require("inquirer");
const SVG = require("./svg");
const { Circle, Triangle, Square } = require("./shapes");
const fs = require('fs')

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

                const svg = new SVG(answers.text, answers.textColor, shape.render())

                fs.writeFile('./examples/logo.svg', svg.render(), (err) => 
                err ? console.log(err) : console.log('Logo successfully generated!')
                );
            })
    }
}

module.exports = CLI;