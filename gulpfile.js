'use strict';

/* eslint-disable no-unused-vars */
// set up requires for gulp tasks
const gulp = require( 'gulp' );
const babel = require( 'gulp-babel' );
const eslint = require( 'gulp-eslint' );
const usemin = require( 'gulp-usemin' );
const uglify = require( 'gulp-uglify' );
const minifyHtml = require( 'gulp-minify-html' );
const minifyCss = require( 'gulp-minify-css' );
const imagemin = require( 'gulp-imagemin' );
const pngquant = require( 'imagemin-pngquant' );
const gzip = require( 'gulp-gzip' );
const critical = require( 'critical' );
const useref = require( 'gulp-useref' );
const gulpif = require( 'gulp-if' );
const sitemap = require( 'gulp-sitemap' );
const autoprefixer = require( 'gulp-autoprefixer' );
const sync = require( 'browser-sync' ).create();

const util = require( 'gulp-util' );


// DEVELOPMENT ENVIRONMENT TASKS (for ./build)
// port in relevant content without any async operations
gulp.task( 'dev-port', () => {
    gulp.src( [ '_site/index.html', '_site/src/**/*', '!_site/src/blog', './theme' ] )
        .pipe( gulp.dest( 'build/' ) );
    gulp.src( '_site/blog/**/*' )
        .pipe( gulp.dest( 'build/blog/' ) );
    gulp.src( 'theme/**/*' )
        .pipe( gulp.dest( 'build/theme/' ) );
    gulp.src( 'node_modules/jquery/**/*' )
        .pipe( gulp.dest( 'build/node_modules/jquery' ) );
    gulp.src( 'node_modules/picturefill/**/*' )
        .pipe( gulp.dest( 'build/node_modules/picturefill' ) );
    gulp.src( 'theme/fonts/themify-icons/fonts/**/*' )
        .pipe( gulp.dest( 'build/theme/fonts/' ) );
} );

// set up watcher
gulp.task( 'dev-watch', [ 'dev-port' ], sync.reload );

// browserSync server
gulp.task( 'serve', [ 'dev-port' ], () => {
    sync.init( {
        server: {
            baseDir: './build'
        }
    } );
    gulp.watch( [ 'theme/css/*', 'theme/js/*' ], [ 'dev-watch' ] );
} );

// browserSync for overview.html and class-materials
gulp.task( 'class', () => {
    sync.init( {
        server: {
            baseDir: 'src/class-slides/class-materials'
        }
    } );
    gulp.watch( [ 'src/class-slides/class-materials/**/*' ], sync.reload );
} );

// DEPLOYMENT BUILD TASKS (outside of ./public)
// css auto-prefixer for compatibility (pre-build)
gulp.task( 'autoprefixer', () => {
    return gulp.src( './theme/css/*.css' )
            .pipe( autoprefixer( {
                browsers: [ 'last 2 versions' ],
                cascade: 'false'
            } ) )
            .pipe( gulp.dest( './theme/css/' ) );
} );

// DEPLOYMENT BUILD TASKS (in ./public)
// Porters of content outside of _site directory
gulp.task( 'font-port', () => {
    return gulp.src( [ 'theme/fonts/themify-icons/fonts/**/*' ] )
            .pipe( gulp.dest( 'public/theme/fonts' ) );
} );
gulp.task( 'other-image-port', () => {
    return gulp.src( [ 'theme/images/**/*.svg', 'theme/images/**/*.ico' ] )
            .pipe( gulp.dest( 'public/theme/images' ) );
} );

// Porters of unmodified _site content (class-slides and post directories)
gulp.task( 'class-port', () => {
    return gulp.src( '_site/src/class-slides/**/*' )
            .pipe( gulp.dest( 'public/class-slides' ) );
} );

gulp.task( 'blog-port', () => {
    return gulp.src( 'build/blog/**/*' )
            .pipe( gulp.dest( 'public/blog' ) );
} );

// image minifier (no CSS, HTML, or JS)
gulp.task( 'image-min', () => {
    return gulp.src( [ 'theme/images/**/*.jpg', 'theme/images/**/*.png' ] )
            .pipe( imagemin( {
                optimizationLevel: 7,
                progressive: true,
                use: [ pngquant() ]
            } ) )
            .pipe( gulp.dest( 'public/theme/images' ) );
} );

// surge-css porter
gulp.task( 'surge-port', () => {
    return gulp.src( [ 'theme/css/surge.css' ] )
            .pipe( gulp.dest( 'public/theme/css' ) );
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
    // asyncDeps.push( 'babel' );

    return gulp.src( 'theme/js/**/*.es6' )
            .pipe( babel( { presets: [ 'es2015' ] } ) )
            .pipe( gulp.dest( 'theme/js/' ) );
} );

// CSS and JS minifier after all other files have been ported over
const asyncDeps = [
    'babel',
    'autoprefixer',
    'surge-port',
    'blog-port',
    'class-port',
    'other-image-port',
    'font-port'
];

const asyncSrc = [
    '_site/src/**/*.html',
    '_site/index.html',
    '!_site/src/class-slides/**/*'
];

gulp.task( 'async', asyncDeps, () => {
    return gulp.src( asyncSrc )
        .pipe( useref( { searchPath: '.' } ) )
        .pipe( gulpif( '*.js', uglify() ) )
        .pipe( gulpif( '*.css', minifyCss() ) )
        .pipe( gulp.dest( './public' ) );
} );

// Sitemap generator for SEO and search engine ease-of-use (XML format)
gulp.task( 'sitemapper', [ 'async' ], () => {
    return gulp.src( 'public/**/*.html' )
      .pipe( sitemap( { siteUrl: 'https:// savvycoders.com' } ) )
      .pipe( gulp.dest( './public' ) );
} );

// CSS inliner post-CSS and JS minification, pre-HTML minification and gzipping
gulp.task( 'css-inline', [ 'sitemapper' ], () => {
    return critical.generateInline( {
        base: 'public/',
        src: 'index.html',
        dest: 'public/index.html',
        width: 1300,
        height: 900
    } );
} );

// HTML minifier (run after ports, image-minification, and critical CSS inlining)
gulp.task( 'cruncher', [ 'css-inline' ], () => {
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
