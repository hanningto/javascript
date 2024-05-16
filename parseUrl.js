function UrlParser(urls) {
  let parser = new URL(urls);

  return {
    protocol: parser.protocol,
    host: parser.host,
    port: parser.port,
    hostname: parser.hostname,
    pathname: parser.pathname,
    search: parser.search,
    hash: parser.hash,
  };
}

console.log(UrlParser("https://www.hackerrank.com/onboarding?redirect=%2Fdashboard")
);
// protocol: parser.protocol,
//         host: parser.host,
//         hostname: parser.hostname,
//         port: parser.port,
//         pathname: parser.pathname,
//         search: parser.search,
//         hash: parser.hash
