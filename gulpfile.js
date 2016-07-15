var gulp = require('gulp');

var sass = require('gulp-sass');

var paths = {
	scripts: 'src/**/*.js',
	html: [
	'./src/**/*.html',
	'!./src/index.html'
	],
	scss: './src/scss/*.scss',
	css: './src/css',
	index: './src/index.html',
	build: './build/'
};

// Compile SASS
gulp.task('sass', function(){
	return gulp.src(paths.scss)
	.pipe(sass())
	.pipe(gulp.dest(paths.css));
});

// Watch
gulp.task('watch', function(){
	gulp.watch(paths.scss, ['sass']);
});

//Default
gulp.task('default', ['sass', 'watch']);