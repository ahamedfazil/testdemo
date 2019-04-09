/*
https://github.com/wictorwilen/gulp-spsync
*/
const gulp = require("gulp");
const sp = require('gulp-spsync');
const prompt = require("gulp-prompt");
const argv = require("minimist")(process.argv.slice(2));
const { URL, credentials } = require("./webpack/webpack.env");

const environment = argv.env || "test";

const coreOptions = {
  "client_id": credentials[environment].ClientId,
  "client_secret": credentials[environment].ClientSecret,
  "realm" : "",
  "site" : URL[environment].siteUrl,
  "verbose": "true"
};

gulp.task("default", () => {
  gulp.src("webpack/dist/**").pipe(
    prompt.prompt(
      [
        {
          type: "input",
          name: "userid",
          message: "Enter User ID - "
        },
        {
          type: "password",
          name: "pwd",
          message: "Enter Password - "
        }
      ],
      function(res) {
        const proxy_URL =
          "";
        process.env.https_proxy = proxy_URL;
        process.env.http_proxy = proxy_URL;
        gulp
          .src("webpack/dist/**")
          .pipe(sp(coreOptions))
          .pipe(gulp.dest("build"));
      }
    )
  );
});

// // Setup Proxy for Online deployment
// const proxy_URL =
//   "http:pxgot4.srv.volvo.com:8080";
// // const proxy_URL = URL["proxyURL"];  
// process.env.https_proxy = proxy_URL;
// process.env.http_proxy = proxy_URL;

// gulp.task("default", () => {
//   gulp.src('webpack/dist/**').
//     pipe(sp(coreOptions)).		
//     pipe(gulp.dest('build'))
// });