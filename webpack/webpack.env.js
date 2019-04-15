
const URL = {
  production: {
    siteUrl: ""
  },
  qa: {
    siteUrl: ""
  },
  test: {
    siteUrl: "https://sites.kpmg.co.uk/apps/katsdev"
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
  }
};

const targetPath = "/SiteAssets/kats";

module.exports = {
  URL,
  credentials,
  targetPath
};
