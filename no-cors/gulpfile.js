var gulp = require('gulp');
var webserver = require('gulp-webserver');
var proxy = require('http-proxy-middleware');

gulp.task('webserver', function() {
    var apiProxy = proxy('/xx', {
         target: {
            host: 'localhost',
            protocol: 'http:',
            port: 5000
        },
        logLevel: 'debug'
    });

    gulp.src('./www')
        .pipe(webserver({
            livereload: true,
            directoryListing: {
                enable: true,
                path: './www'
            },
            open: true,
            middleware: [apiProxy]
        }));
});

gulp.task('default', ['webserver']);