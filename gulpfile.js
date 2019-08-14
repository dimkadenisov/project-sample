'use strict'

const gulp = require('gulp');

//--------------
//--------------
//--------------
//--------------

function lazyRequireTask(taskName, path, options = {}) {
  options.taskName = taskName;
  gulp.task(taskName, function(callback) {
    let task = require(path).call(this, options);
    return task(callback);
  });
};

//--------------
//--------------
//--------------
//--------------

lazyRequireTask('pug', './tasks/pug', {
  src: 'frontend/pug/pages/*.pug',
  dest: 'public',
});

lazyRequireTask('styles', './tasks/styles', {
  src: 'frontend/styles/sсss/main.scss',
  dest: 'public/styles',
});

lazyRequireTask('styles:libs', './tasks/styles:libs', {
  src: 'frontend/styles/libraries/*.*',
  dest: 'public/styles/libraries',
});

lazyRequireTask('scripts', './tasks/scripts', {
  src: 'frontend/scripts/components/*.js',
  base: 'frontend',
  dest: 'public/scripts',
});

lazyRequireTask('scripts:libs', './tasks/copy', {
  src: 'frontend/scripts/libraries/*.js',
  dest: 'public/scripts/libraries',
});

lazyRequireTask('svg:min', './tasks/svg:min', {
  src: 'frontend/assets/icons/*.svg',
  dest: 'public/assets/icons',
  plugins: [
    {cleanupAttrs: true},
    {inlineStyles: true},
    {removeDoctype: true},
    {removeXMLProcInst: true},
    {removeComments: true},
    {removeMetadata: true},
    {removeTitle: true},
    {removeDesc: true},
    {removeUselessDefs: true},
    {removeXMLNS: false},
    {removeEditorsNSData: true},
    {removeEmptyAttrs: true},
    {removeHiddenElems: true},
    {removeEmptyText: true},
    {emoveEmptyContainers: true},
    {removeViewBox: false},
    {cleanupEnableBackground: true},
    {minifyStyles: false},
    {convertStyleToAttrs: true},
    {convertColors: true},
    {convertPathData: true},
    {convertTransform: true},
    {removeUnknownsAndDefaults: true},
    {removeNonInheritableGroupAttrs: true},
    {removeUselessStrokeAndFill: true},
    {removeUnusedNS: true},
    {cleanupIDs: true},
    {cleanupNumericValues: true},
    {cleanupListOfValues: true},
    {moveElemsAttrsToGroup: true},
    {moveGroupAttrsToElems: true},
    {collapseGroups: true},
    {removeRasterImages: true},
    {mergePaths: true},
    {convertShapeToPath: true},
    {sortAttrs: true},
    {removeDimensions: true},
    {removeAttrs: true},
    {removeElementsByAttr: false},
    {addClassesToSVGElement: false},
    {addAttributesToSVGElement: false},
    {removeStyleElement: false},
    {removeScriptElement: false},
    {prefixIds: false},
  ]
});

lazyRequireTask('svg:sprite', './tasks/svg:sprite', {
  src: 'frontend/assets/icons/sprite/*.svg',
  dest: 'frontend/assets/icons/sprite/',
  config: {
    shape: {
      dimension: {
        maxWidth: 40,
        maxHeight: 40
      },
      spacing: {
        padding: 10
      },
      transform: [
        {svgo: {
          plugins: [
            {cleanupAttrs: true},
            {inlineStyles: true},
            {removeDoctype: true},
            {removeXMLProcInst: true},
            {removeComments: true},
            {removeMetadata: true},
            {removeTitle: true},
            {removeDesc: true},
            {removeUselessDefs: true},
            {removeXMLNS: false},
            {removeEditorsNSData: true},
            {removeEmptyAttrs: true},
            {removeHiddenElems: true},
            {removeEmptyText: true},
            {emoveEmptyContainers: true},
            {removeViewBox: false},
            {cleanupEnableBackground: true},
            {minifyStyles: false},
            {convertStyleToAttrs: true},
            {convertColors: true},
            {convertPathData: true},
            {convertTransform: true},
            {removeUnknownsAndDefaults: true},
            {removeNonInheritableGroupAttrs: true},
            {removeUselessStrokeAndFill: true},
            {removeUnusedNS: true},
            {cleanupIDs: true},
            {cleanupNumericValues: true},
            {cleanupListOfValues: true},
            {moveElemsAttrsToGroup: true},
            {moveGroupAttrsToElems: true},
            {collapseGroups: true},
            {removeRasterImages: true},
            {mergePaths: true},
            {convertShapeToPath: true},
            {sortAttrs: true},
            {removeDimensions: true},
            {removeAttrs: true},
            {removeElementsByAttr: false},
            {addClassesToSVGElement: false},
            {addAttributesToSVGElement: false},
            {removeStyleElement: false},
            {removeScriptElement: false},
            {prefixIds: false},
          ]
        }}
      ]
    },
    mode: {
      symbol: true,
      inline: true,
    },
    svg: {
      namespaceIDs: false,
      namespaceClassnames: false
    }
  }
});


lazyRequireTask('images', './tasks/images', {
  src: 'frontend/assets/img/*.*',
  dest: 'public/assets/img',
});

lazyRequireTask('fonts', './tasks/copy', {
  src: 'frontend/assets/fonts/*.*',
  dest: 'public/assets/fonts',
});

lazyRequireTask('clean', './tasks/clean', {
  src: ['public', 'frontend/assets/img/icons-minificated'],
});

lazyRequireTask('server', './tasks/server', {
  baseDir: 'public',
  watchDir: 'public/**/*.*'
});

//--------------
//--------------
//--------------
//--------------

gulp.task('assets', gulp.series('svg:min', 'svg:sprite', gulp.parallel('images', 'fonts')));


gulp.task('build', gulp.series('assets', gulp.parallel('scripts:libs', 'scripts', 'pug', 'styles','styles:libs')));


gulp.task('watch', function () {
  gulp.watch('frontend/scripts/components/*.js', gulp.series('scripts'));
  gulp.watch('frontend/scripts/libraries/*.js', gulp.series('scripts:libs'));
  gulp.watch('frontend/styles/sсss/**/*.scss', gulp.series('styles'));
  gulp.watch('frontend/styles/libraries/**/*.scss', gulp.series('styles:libs'));
  gulp.watch('frontend/pug/**/*.pug', gulp.series('pug'));
  gulp.watch(['frontend/assets/**/*.*', '!frontend/assets/icons/sprite/symbol/**/*.*'], gulp.series('assets', 'pug'));
});



gulp.task('default', gulp.series('build', gulp.parallel('watch', 'server')));
