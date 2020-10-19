<img alt="Logo" src="http://coderslab.pl/svg/logo-coderslab.svg" width="400">

# Sass/RWD - Snippety
> Krótkie kawałki kodu, które pokazują zależności, rozwiązują popularne problemy oraz pokazują jak używać niektórych funkcji.

## Gulp

### 1. Jak powinien wygladać gulpfile - kompilacja Sass ?

```JavaScript
var gulp = require('gulp');
var sass = require('gulp-sass');
var sourcemaps = require('gulp-sourcemaps');

gulp.task('sass', function() {
    return gulp.src('scss/style.scss')
        .pipe(sourcemaps.init())
        .pipe(sass({
            errLogToConsole: true,
            outputStyle: 'expanded'
        }))
        .pipe(sourcemaps.write())
        .pipe(gulp.dest('css'))
});

gulp.task('watch', function(){
    gulp.watch('scss/**/*.scss', ['sass']);
});
```

## Sass

### 2. Jak powinna wyglądać struktura plików projektu ?

```
[folder] css
[folder] images
[folder] js
[folder] sass
         .gitignore
         gulpfile.js
         index.html
```
Strukura folderu Sass
```
[folder] sass
    [folder] modules
                _all.scss
                _colors.scss
                _mixins.scss
    [folder] partials
                _footer.scss
                _header.scss
                _base.scss
    main.scss
```


## RWD


### 1. Środkowanie elementu za pomocą jendostek viewportu

Dlaczego margines dolny i górny jest ustawiony na 30vh? Musimy zapenić `100%` viewportu `30 * 2 + 40` da nam 100vh

```
.rectangle {
    width: 40vw;
    height: 40vh;
    margin: 30vh auto;
    background-color: green;
}

```

### 2. Wykrywanie urządzenia za pomocą JavaScriptu

```JavaScript
var isMobile = false;
if( /Android|webOS|iPhone|iPad|iPod|BlackBerry|IEMobile|Opera Mini/i.test(navigator.userAgent) ) {
  isMobile = true;
}
```
Istnieje dużo więcej metod na sprawdzanie urządzenia. Zajrzyj: http://stackoverflow.com/questions/11381673/detecting-a-mobile-browser
