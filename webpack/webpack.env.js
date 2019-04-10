
const URL = {
  dev: {
    siteUrl: "http://localhost:3000"
  },
  production: {
    siteUrl: ""
  },
  qa: {
    siteUrl: ""
  },
  test: {
    siteUrl: "https://xlitconsultinge.sharepoint.com/sites/katsdev"
    // https://xlitconsultinge.sharepoint.com/sites/katsdev
    // http://segotn13423/dev/ispt/
  }
};

const credentials = {
  // Online
  production: {
    ClientId: "",
    ClientSecret: ""
  },
  qa: {
    ClientId: "",
    ClientSecret: ""
  },
  test: {
    ClientId: "",
    ClientSecret: ""
  },
  dev: {
    username: "cs-ws-s-sph-svc-test",
    password: "&&KM7IH-7a97%b&",
  }
};

const targetPath = "/SiteAssets/kats";

module.exports = {
  URL,
  credentials,
  targetPath
};
