
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
    ClientId: "032f4487-989c-47da-a3c2-e203ea69e6ef",
    ClientSecret: "3rm7YGoPA5vhTrbAcv/Na2EDKzN/JFvXbl5PjK7zFwA="
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
