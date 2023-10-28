const inquirer = require('inquirer');
const { checkLogoTextLength, isColorValid, writeToFile } = require('./lib/utils.js');
const { Rectangle, Square, Triangle, Circle, Ellipse } = require('./lib/shapes.js');

function init() {
    inquirer
    .prompt([
        {
            // LOGO TEXT
            type: 'input',
            message: 'Enter Logo Text (max 3 characters):',
            name: 'logoText',
            validate: checkLogoTextLength
        },
        {
            // TEXT COLOR
            type: 'input',
            message: 'Enter a color keyword or hexadecimal color code for your text color:',
            name: 'logoTextColor',
            validate: isColorValid
        },
        {
            // SHAPE
            type: 'list',
            name: 'logoShape',
            message: 'What shape do you want to use?',
            choices: ['Rectangle','Rounded Rectangle','Square','Rounded Square','Triangle','Circle','Ellipse']
        },
        {
            // SHAPE COLOR
            type: 'input',
            message: 'Enter a color keyword or hexadecimal color code for your shape color:',
            name: 'logoShapeColor',
            validate: isColorValid
        },
    ])
    .then ((answers) => {
        console.log(answers);
        switch (answers.logoShape) {
            case 'Rectangle':
            case 'Rounded Rectangle':
                const rectangle = new Rectangle(answers.logoText, answers.logoTextColor, answers.logoShape, answers.logoShapeColor);
                const renderRectangle = rectangle.renderSVG();
                writeToFile('./examples/logo.svg', renderRectangle);
                break;
            case 'Square':
            case 'Rounded Square':
                const square = new Square(answers.logoText, answers.logoTextColor, answers.logoShape, answers.logoShapeColor);
                const renderSquare = square.renderSVG();
                writeToFile('./examples/logo.svg', renderSquare);
                break;
            case 'Triangle':
                const triangle = new Triangle(answers.logoText, answers.logoTextColor, answers.logoShape, answers.logoShapeColor);
                const renderTriangle = triangle.renderSVG();
                writeToFile('./examples/logo.svg', renderTriangle);
                break;
            case 'Circle':
                const circle = new Circle(answers.logoText, answers.logoTextColor, answers.logoShape, answers.logoShapeColor);
                const renderCircle = circle.renderSVG();
                writeToFile('./examples/logo.svg', renderCircle);
                break;
            case 'Ellipse':
                const ellipse = new Ellipse(answers.logoText, answers.logoTextColor, answers.logoShape, answers.logoShapeColor);
                const renderEllipse = ellipse.renderSVG();
                writeToFile('./examples/logo.svg', renderEllipse);
                break;
        }
    })
}

init();