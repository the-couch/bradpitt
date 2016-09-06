var gulp        = require("gulp"),
    gutil       = require("gulp-util"),
    livereload  = require("gulp-livereload"),
    sass        = require("gulp-sass"),
    webpack     = require("webpack");


gulp.task("webpack", function () {
    webpack(
        require("./webpack.config.js"),
        function (err, stats) {
            if (err) throw new gutil.PluginError("webpack", err);
            gutil.log(stats.toString({ colors: true }));
        }
    );
});

gulp.task("watch", function () {
    livereload.listen();

    gulp.watch('src/sass/**/*.scss', function() {
      gulp.run('sass');
    });

    gulp.watch([
        "dist/bundle.js",
        "demo/app.css",
        "*.html",
    ], function (event) {
        livereload.changed(event);
    });

});

gulp.task('sass', function() {

  srcfile = 'src/sass/app.scss';
  loadPath = 'demo/*';
  destdir = 'demo';

  gulp.src(srcfile)
  .pipe(sass({
    noCache: true,
    lineNumbers: true,
    loadPath: loadPath,
    quiet: true
  }))
  .pipe(gulp.dest(destdir));

});

gulp.task("default", ["webpack", "sass", "watch"]);
gulp.task("build", ["webpack", "sass"]);
