var gobblefile = require( '../../gobblefile' );

module.exports = function () {
	return gobblefile.build({
		dest: 'tmp',
		force: true
	}).then( function () {
		return require( '../../tmp' );
	});
};
