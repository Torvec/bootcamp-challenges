// Node file system module
const fs = require('fs');

// List of all supported SVG Color Names found here: https://graphviz.org/doc/info/colors.html#svg
const svgColorNames = ["aliceblue", "antiquewhite", "aqua", "aquamarine", "azure", "beige", "bisque", "black", "blanchedalmond", "blue", "blueviolet", "brown", "burlywood", "cadetblue", "chartreuse", "chocolate", "coral", "cornflowerblue", "cornsilk", "crimson", "cyan", "darkblue", "darkcyan", "darkgoldenrod", "darkgray", "darkgreen", "darkgrey", "darkkhaki", "darkmagenta", "darkolivegreen", "darkorange", "darkorchid", "darkred", "darksalmon", "darkseagreen", "darkslateblue", "darkslategray", "darkslategrey", "darkturquoise", "darkviolet", "deeppink", "deepskyblue", "dimgray", "dimgrey", "dodgerblue", "firebrick", "floralwhite", "forestgreen", "fuchsia", "gainsboro", "ghostwhite", "gold", "goldenrod", "gray", "grey", "green", "greenyellow", "honeydew", "hotpink", "indianred", "indigo", "ivory", "khaki", "lavender", "lavenderblush", "lawngreen", "lemonchiffon", "lightblue", "lightcoral", "lightcyan", "lightgoldenrodyellow", "lightgray", "lightgreen", "lightgrey", "lightpink", "lightsalmon", "lightseagreen", "lightskyblue", "lightslategray", "lightslategrey", "lightsteelblue", "lightyellow", "lime", "limegreen", "linen", "magenta", "maroon", "mediumaquamarine", "mediumblue", "mediumorchid", "mediumpurple", "mediumseagreen", "mediumslateblue", "mediumspringgreen", "mediumturquoise", "mediumvioletred", "midnightblue", "mintcream", "mistyrose", "moccasin", "navajowhite", "navy", "oldlace", "olive", "olivedrab", "orange", "orangered", "orchid", "palegoldenrod", "palegreen", "paleturquoise", "palevioletred", "papayawhip", "peachpuff", "peru", "pink", "plum", "powderblue", "purple", "red", "rosybrown", "royalblue", "saddlebrown", "salmon", "sandybrown", "seagreen", "seashell", "sienna", "silver", "skyblue", "slateblue", "slategray", "slategrey", "snow", "springgreen", "steelblue", "tan", "teal", "thistle", "tomato", "turquoise", "violet", "wheat", "white", "whitesmoke", "yellow", "yellowgreen"];

const checkLogoTextLength = (input) => {
    if (input.length > 3 || input.length < 1) {
        return 'Please enter your logo text (1 to 3 characters)';
    }
    return true;
}

const isColorValid = (input) => {
    const upperInput = input.toUpperCase();
    const lowerInput = input.toLowerCase();
    // Regex tests if a the user's input is either a valid 6 or 3 digit hexadecimal color code with letters A through F and/or numbers 0 through 9 with a # at the beginning
    const colorRegex = /^#([A-F0-9]{6}|[A-F0-9]{3})$/;
    if (colorRegex.test(upperInput) || svgColorNames.includes(lowerInput)) {
        return true;
    } else {
        return 'Please enter a valid color keyword or hexadecimal color code.';
    }
}

function writeToFile(fileName, answers) {
    fs.writeFile(fileName, answers, (err) => {
        err ? console.log(err) : console.log('Generated logo.svg');
    });
}

module.exports = {svgColorNames, checkLogoTextLength, isColorValid, writeToFile}