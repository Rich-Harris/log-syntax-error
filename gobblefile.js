var gobble = require( 'gobble' );

module.exports = gobble( 'src' )
	.transform( 'babel', {
		blacklist: [ 'es6.modules', 'useStrict' ],
		sourceMap: false
	})
	.transform( 'esperanto', {
		type: 'cjs',
		sourceMap: false
	});
