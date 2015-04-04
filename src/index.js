import * as chalk from 'chalk';

function pad ( num, digits ) {
	num = String( num );

	while ( num.length < digits ) {
		num = ' ' + num;
	}

	return num;
}

export default function logSyntaxError ( code, line, column, options ) {
	const buffer = ( options && 'buffer' in options ) ? options.buffer : 2;

	line -= 1; // zero base

	const start = Math.max( 0, line - buffer );
	const end = line + buffer;

	const numDigits = String( line + buffer ).length;

	let lines = code.split( '\n' ).slice( start, end + 1 );

	lines = lines.map( function ( str, i ) {
		const lineNum = start + i;

		if ( lineNum === line ) {
			if ( column !== undefined ) {
				str = str.substr( 0, column ) + chalk.inverse( str[ column ] ) + str.substring( column + 1 );
			}

			str = chalk.red( str );
		}

		return pad( lineNum + 1, numDigits ) + ': ' + str;
	});

	return lines.join( '\n' );
}
