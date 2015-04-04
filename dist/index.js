'use strict';



module.exports = logSyntaxError;
var chalk = require('chalk');

function pad(num, digits) {
	num = String(num);

	while (num.length < digits) {
		num = ' ' + num;
	}

	return num;
}
function logSyntaxError(code, line, column, options) {
	var buffer = options && 'buffer' in options ? options.buffer : 2;

	line -= 1; // zero base

	var start = Math.max(0, line - buffer);
	var end = line + buffer;

	var numDigits = String(line + buffer).length;

	var lines = code.split('\n').slice(start, end + 1);

	lines = lines.map(function (str, i) {
		var lineNum = start + i;

		if (lineNum === line) {
			if (column !== undefined) {
				str = str.substr(0, column) + chalk.inverse(str[column]) + str.substring(column + 1);
			}

			str = chalk.red(str);
		}

		return pad(lineNum + 1, numDigits) + ': ' + str;
	});

	return lines.join('\n');
}