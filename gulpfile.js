const gulp = require('gulp');
const browserSync = require('browser-sync').create();

/* BrowserSync */
function browserSyncInit(done) {
    browserSync.init({
        server: {
            baseDir: './src'
        },
        port: 3000
    });
    done();
}

function reload(done) {
    browserSync.stream();
    done();
}

/* Watch for changes */
function watchers(done) {
    gulp.watch('./src/index.html', gulp.series(browserSync.stream));
    gulp.watch('./src/main.js', gulp.series(browserSync.stream));
    gulp.watch('./src/style.css', gulp.series(browserSync.stream));
    done();
}

const watch = gulp.series(browserSyncInit, watchers);

exports.default = watch;
