var gulp = require('gulp');
var sass = require('gulp-sass');
var postcss = require('gulp-postcss');
var autoprefixer = require('autoprefixer');
var compass = require('compass');


gulp.task('sass', function () {
    // take all *.scss files directly under the `src` folder (ignore files within subolders)
    gulp.src('src/*.scss')
        // More info at: https://github.com/dlmanning/gulp-sass/tree/v2.1.1
        .pipe(
          sass({ outputStyle:'expanded',
            includePaths: ['node_modules/foundation-sites/scss', "node_modules/foundation-sites/scss/settings"], })
              .on('error', sass.logError)
          )
        // More info at: https://github.com/postcss/autoprefixer/tree/6.3.1
        .pipe( postcss([
            autoprefixer({
                browsers: ['> 0.5%', 'last 2 versions', 'Firefox ESR'],
              })
          ]) )
        // write the resulting .css files into the `dist` folder
        .pipe( gulp.dest('dist/') );
  });


gulp.task('sass:watch', function () {
    // watch out for changes to *any* .scss files within the `scr` folder (including subfolders!)
    // and run the 'sass' task above.
    gulp.watch('src/**/*.scss', ['sass']);
  });


// Defining the "default" task is required by gulp.
// running `gulp` with no parameters will start `sass` and `sass:watch` tasks
gulp.task('default', [
    'sass',
    'sass:watch'
  ]);


  // compiles in process.cwd()
  compass.compile(function(err, stdout, stderr) {
     console.log('done');
  });

  // compiles in the given directory
  compass.compile({ cwd: __dirname + 'public' }, function(err, stdout, stderr) {
     console.log('done');
  });
