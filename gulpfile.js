var gulp = require('gulp');

var sass = require('gulp-sass');
var jshint = require('gulp-jshint');
var uglify = require('gulp-uglify');
var minifyHtml = require('gulp-minify-html');
var cleanCSS = require('gulp-clean-css');
var imagemin = require('gulp-imagemin');
var usemin = require('gulp-usemin');
var del = require('del');

var paths = {
	scripts: 'src/**/*.js',
	html: [
	'./src/**/*.html',
	'!./src/index.html'
	],
	scss: './src/scss/*.scss',
	css: './src/css',
	index: './src/index.html',
	images: './src/images/*',
	dist: './dist/'
};

// JavaScript linting
gulp.task('jshint', function(){
	return gulp.src(paths.scripts)
	.pipe(jshint())
	.pipe(jshint.reporter('default'));
});

// Compile SASS
gulp.task('sass', function(){
	return gulp.src(paths.scss)
	.pipe(sass())
	.pipe(gulp.dest(paths.css));
});

// Watch
gulp.task('watch', function(){
	gulp.watch(paths.scss, ['sass']);
	gulp.watch(paths.scripts, ['jshint']);
});

// Build
gulp.task('clean', function(){
	del(paths.dist);
});

// Image optimization task
gulp.task('images', [ 'clean' ], function() {
  return gulp.src(paths.images)
    .pipe(imagemin())
    .pipe(gulp.dest('dist/images'));
});

gulp.task('usemin', [ 'images' ], function(){
	gulp.src( paths.index )
	.pipe(usemin({
		css: [ cleanCSS() ],
		js: [ uglify() ]
	}))
	.pipe(gulp.dest( paths.dist ))
});

gulp.task('build', ['usemin']);

//Default
gulp.task('default', ['sass', 'jshint', 'watch']);







