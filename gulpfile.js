/**
 * Scytto Build script
 */

'use strict';

require('es6-promise').polyfill();

const
	gulp = require('gulp'),
	shell = require('gulp-shell'),
	bs = require('browser-sync').create();

gulp.task('build', shell.task(['bundle exec jekyll serve']));

gulp.task('serve', function() {
	bs.init({
		server: {baseDir: '_site/'},
		browser: 'chrome',
		files: ['_site/css/*.css']
	});
	gulp.watch('_site/**/*.*').on('change', bs.reload);
})

gulp.task('default', ['build', 'serve']);
