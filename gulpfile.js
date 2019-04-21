const gulp = require("gulp");
var spsave = require('gulp-spsave');
const prompt = require("gulp-prompt");
const argv = require("minimist")(process.argv.slice(2));
const { URL } = require("./webpack/webpack.env");

const environment = argv.env || "test";

var coreOptions = {  
  siteUrl: URL[environment].siteUrl,
  notification: true,
  flatten: false
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
        // const proxy_URL =
        //   "";
        // process.env.https_proxy = proxy_URL;
        // process.env.http_proxy = proxy_URL;
        gulp
          .src("webpack/dist/**")
          .pipe(spsave(coreOptions, {
            username: res.userid,
            password: res.pwd,
          }))
          .pipe(gulp.dest("build"));
      }
    )
  );
});