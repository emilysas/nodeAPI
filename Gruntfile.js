module.exports = function(grunt){

	grunt.initConfig({
		pkg: grunt.file.readJSON('package.json'),
		mocha_casperjs:{
			options: {
			},
			files: {
				src: ['test/**/*']
			}
		},
		nodemon: {
  		dev: {
    script: 'index.js'
  }
}
	});
	grunt.loadNpmTasks('grunt-contrib-watch');
	grunt.loadNpmTasks('grunt-mocha-casperjs');
	grunt.loadNpmTasks('grunt-nodemon');

	grunt.registerTask('default', ['mocha_casperjs']);

};
