var gulp = require('gulp');
var plugins = require('gulp-load-plugins')();
var rimraf = require('rimraf');
var browserSync = require('browser-sync').create();
var browserify = require('gulp-browserify');
var concat = require('gulp-concat');
var less = require('gulp-less');
var refresh = require('gulp-livereload');
var lr = require('tiny-lr');
var server = lr();
var minifyCSS = require('gulp-minify-css');
var embedlr = require('gulp-embedlr');
var proxyMiddleware = require('http-proxy-middleware');
var bodyParser = require('body-parser');

gulp.task('scripts', function() {
    gulp.src(['units/**/js/*.js'])
        .pipe(browserify())
        .pipe(gulp.dest('dist/build'))
        .pipe(refresh(server));
});

gulp.task('styles', function() {
    gulp.src(['units/**/less/*.less'])
        .pipe(less())
        .pipe(minifyCSS())
        .pipe(gulp.dest('dist/build'))
        .pipe(refresh(server));
});

gulp.task('lr-server', function() {
    server.listen(4000, function(err) {
        if(err) return console.log(err);
    });
});

gulp.task('html', function() {
    gulp.src("units/**/*.html")
        .pipe(embedlr())
        .pipe(gulp.dest('dist/'))
        .pipe(refresh(server));
});

gulp.task('watch', function () {

//    var proxy = proxyMiddleware('/spring/home', {target: 'http://localhost:8080/spring/home'});

    var jsonParser = bodyParser.json();
    browserSync.init({
        server: {
            baseDir: ['./'],
            index: "index.html"

        },
        logLevel: "debug",
        middleware: [jsonParser],
        port: 4000,
        logConnections: true,
        ui: {
            port: 4001
        }
    });
    

});

gulp.task('default', function() {
    gulp.run('lr-server', 'scripts', 'styles', 'html', 'watch');

    gulp.watch('units/**/js/*.js', function(event) {
        gulp.run('scripts');
    });

    gulp.watch('units/**/less/*.less', function(event) {
        gulp.run('styles');
    });

    gulp.watch('units/**/*.html', function(event) {
        gulp.run('html');
    });
});