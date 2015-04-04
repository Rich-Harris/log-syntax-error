var assert = require( 'assert' );
var chalk = require( 'chalk' );

describe( 'log-syntax-error', function () {
	var logSyntaxError;

	before( function () {
		return require( './utils/build' )().then( function ( lib ) {
			logSyntaxError = lib;
		});
	});

	it( 'exists', function () {
		assert.ok( typeof logSyntaxError === 'function' );
	});

	it( 'highlights an error', function () {
		var block = logSyntaxError( 'var 42 = answer;', 1, 4 );
		assert.equal( block, '1: ' + chalk.red( 'var ' + chalk.inverse( 4 ) + '2 = answer;' ) );
	});
});