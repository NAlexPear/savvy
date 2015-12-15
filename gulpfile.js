(function(){
    "use strict";
    
    //set up requires for gulp tasks
    var gulp = require("gulp");
    var usemin = require('gulp-usemin');
    var uglify = require('gulp-uglify');
    var minifyHtml = require('gulp-minify-html');
    var minifyCss = require('gulp-minify-css');
    var imagemin = require('gulp-imagemin');
    var pngquant = require('imagemin-pngquant');
    var gzip = require('gulp-gzip');
    var critical = require('critical');
    var useref = require('gulp-useref');
    var gulpif = require('gulp-if');
    
}());