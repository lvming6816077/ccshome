var gulp = require('gulp');
var postcss = require('gulp-postcss');
var autoprefixer = require('autoprefixer');
var pxtoviewport = require('@tcstory/postcss-px-to-viewport');
var del = require('del');
var cssmin = require('gulp-cssmin');
var imagemin = require('gulp-imagemin'); //压缩图片
var htmlmin = require('gulp-htmlmin');//压缩html

gulp.task('clean', () => {
    return del(['dist'])
})

gulp.task('copy', () => {
    return gulp.src('./src/**/*')
        .pipe(gulp.dest('dist'))
})
gulp.task('imagemin', function() {
    return gulp.src('./dist/imgs/**/*.{jpg,png}')
        .pipe(imagemin())
        .pipe(gulp.dest("./dist/imgs"))
});
gulp.task('htmlmin', () => {
  return gulp.src('./dist/*.html')
    .pipe(htmlmin({ collapseWhitespace: true }))
    .pipe(gulp.dest('dist'));
});

gulp.task('css', function() {

  var plugins = [
    autoprefixer,
    pxtoviewport({
      unitToConvert: "px", // 默认值`px`，需要转换的单位
      viewportWidth: 1920,//视窗的宽度，对应的是我们设计稿的宽度
      viewportHeight: 1050, // 视窗的高度，根据750设备的宽度来指定，一般指定1334，也可以不配置
      unitPrecision: 3,//指定`px`转换为视窗单位值的小数位数，默认是5(很多时候无法整除)
      viewportUnit: 'vw',//指定需要转换成的视窗单位，建议使用vw
      fontViewportUnit: 'vw', //指定字体需要转换成的视窗单位，默认vw;
      selectorBlackList: ['.ignore'],//指定不转换为视窗单位的类 
      minPixelValue: 1,// 小于或等于`1px`不转换为视窗单位
      mediaQuery: false,// 允许在媒体查询中转换`px`，默认false
  })
  ];
  return gulp.src('./dist/css/**/*.css')
  .pipe(cssmin())
  .pipe(postcss(plugins))
  .pipe(gulp.dest('dist/css'));
})

gulp.task('default', gulp.series(['clean','copy','css',/*'imagemin',*/'htmlmin']));
