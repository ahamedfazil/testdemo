const pnpConfig = {
  sp: {
    // baseUrl: "https://sites.kpmg.co.uk/apps/katsdev",
    baseUrl: "http://DESKTOP-Q9SQHGE:8080",
    // baseUrl: "http://localhost:8080",
    headers: {
      Accept: "application/json; odata=verbose",
      "Access-Control-Allow-Origin": "*"
    }
  }
};

export { pnpConfig };
