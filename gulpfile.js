'use strict';

// set up requires for gulp tasks
const autoprefixer = require( 'gulp-autoprefixer' );
const babel = require( 'gulp-babel' );
const clean = require( 'gulp-clean' );
const cloudinary = require( './utils/cloudinary' );
const eslint = require( 'gulp-eslint' );
const glob = require( 'glob' );
const gulp = require( 'gulp' );
// const gulpif = require( 'gulp-if' );
const gzip = require( 'gulp-gzip' );
const minifyHtml = require( 'gulp-minify-html' );
const sass = require( 'gulp-sass' );
const sitemap = require( 'gulp-sitemap' );
// const uglify = require( 'gulp-uglify' );
const usemin = require( 'gulp-usemin' );
const useref = require( 'gulp-useref' );
const util = require( 'gulp-util' );


// Development Utilities
gulp.task( 'clean', () => {
    return gulp.src( './public', { 'read': false } )
            .pipe( clean() );
} );

gulp.task( 'image-upload', () => {
    const images = glob.sync( './theme/images/**/*.*' );

    util.log( 'Uploading images to cloudinary' );

    cloudinary.upload( images );
} );

gulp.task( 'serve', () => {
    util.log( 'Sending ./public directory to localhost directory' );

    return gulp.src( './public/**/*' )
            .pipe( gulp.dest( '/var/www/html/' ) );
} );

gulp.task( 'watch', () => {
    gulp.watch( './theme/sass/*.scss', [ 'sass' ] );
    gulp.watch( [
        './theme/**/*',
        '!./theme/sass/*.scss',
        '!./theme/css/style.css'
    ], [ 'default' ] );
    gulp.watch( './_site/**/*', [ 'default' ] );
    gulp.watch( [
        './src/**/*',
        '!./src/blog/index.html'
    ], [ 'default' ] );
    gulp.watch( './public/**/*', [ 'serve' ] );
} );

// DEPLOYMENT BUILD TASKS (outside of ./public)
// css auto-prefixer for compatibility (pre-build)
gulp.task( 'sass', () => {
    return gulp.src( './theme/sass/**/*.scss' )
            .pipe( sass().on( 'error', sass.logError ) )
            .pipe( gulp.dest( './theme/css' ) );
} );

gulp.task( 'autoprefixer', () => {
    return gulp.src( './theme/css/*.css' )
            .pipe( autoprefixer( {
                browsers: [ 'last 2 versions' ],
                cascade: 'false'
            } ) )
            .pipe( gulp.dest( './theme/css/' ) );
} );

// DEPLOYMENT BUILD TASKS (in ./public)
// Porters of content
gulp.task( 'port', () => {
    gulp.src( [ 'theme/fonts/themify-icons/fonts/**/*' ] )
            .pipe( gulp.dest( 'public/theme/fonts' ) );

    gulp.src( [ 'theme/css/*.css' ] )
            .pipe( gulp.dest( 'public/theme/css' ) );

    gulp.src( [ 'node_modules/milligram/dist/milligram.css' ] )
            .pipe( gulp.dest( 'public/theme/css' ) );

    gulp.src( '_site/src/class-slides/**/*' )
            .pipe( gulp.dest( 'public/class-slides' ) );

    gulp.src( [ '_site/blog/**/*', '_site/src/blog/index.html' ] )
            .pipe( gulp.dest( 'public/blog' ) );
} );

// Linting
gulp.task( 'lint', () => {
    const lintTargets = [
        'theme/js/*.es6',
        '!theme/js/plugins.es6'
    ];

    return gulp.src( lintTargets )
            .pipe( eslint() )
            .pipe( eslint.failAfterError() );
} );

// ES2015-> supported JS
gulp.task( 'babel', [ 'lint' ], () => {
    return gulp.src( 'theme/js/**/*.es6' )
            .pipe( babel( { presets: [ 'es2015' ] } ) )
            .pipe( gulp.dest( 'theme/js/' ) );
} );

// CSS and JS minifier after all other files have been ported over
const asyncDeps = [
    'sass',
    'babel',
    'autoprefixer',
    'port'
];

const asyncSrc = [
    '_site/src/**/*.html',
    '_site/index.html',
    '!_site/src/class-slides/**/*'
];

gulp.task( 'async', asyncDeps, () => {
    return gulp.src( asyncSrc )
        .pipe( useref( { searchPath: '.' } ) )
        // .pipe( gulpif( '*.js', uglify() ) )
        .pipe( gulp.dest( './public' ) );
} );

// Sitemap generator for SEO and search engine ease-of-use (XML format)
gulp.task( 'sitemapper', [ 'async' ], () => {
    return gulp.src( 'public/**/*.html' )
      .pipe( sitemap( { siteUrl: 'https:// savvycoders.com' } ) )
      .pipe( gulp.dest( './public' ) );
} );

// HTML minifier (run after ports, image-minification, and critical CSS inlining)
gulp.task( 'cruncher', [ 'sitemapper' ], () => {
    gulp.src( 'public/index.html' )
    .pipe( usemin( {
        assetsDir: '.',
        html: [ minifyHtml( { empty: true } ) ]
    } ) )
    .pipe( gulp.dest( 'public' ) );
} );

// default task (gzips final files)
const defaultExcludeFileExtensions = [ '.gz', '.md', '.txt', '.json', '.xml' ];
const defaultExcludes = defaultExcludeFileExtensions.map( ( ext ) => `!public/**/*${ext}` );
const defaultSrc = [ 'public/**/*' ].concat( defaultExcludes );

gulp.task( 'default', [ 'cruncher' ], () => {
    gulp.src( defaultSrc )
        .pipe( gzip() )
        .pipe( gulp.dest( 'public' ) );
} );
