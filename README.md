# NODE-ENV Manager

Operating on the NODE_ENV environmental variable

[![node][NPM_URL]][NPM_HREF]
[![Travis][TRAVIS_URL]][TRAVIS_HREF]
[![Coveralls][COVERALLS_URL]][COVERALLS_HREF]
[![Known Vulnerabilities][SNYK_URL]][SNYK_HREF]
[![David][DAVID_URL]][DAVID_HREF]
[![Author][AUTHOR_URL]][AUTHOR_HREF]
[![license][LICENSE_URL]][LICENSE_HREF]

## Usage

### Install

```shell
npm install node-env-manager
```

### CONST

```javascript
const { ENV } = require("node-env-manager");

ENV.PROD          // -> "prod",
ENV.PRODUCT       // -> "product",
ENV.PRODUCTION    // -> "production",
ENV.DEV           // -> "dev",
ENV.DEVELOP       // -> "develop",
ENV.DEVELOPMENT   // -> "development",
ENV.LOCAL         // -> "local",
ENV.TEST          // -> "test",
ENV.EXP           // -> "exp",
ENV.EXPERIENCE    // -> "experience",
ENV.GRAY          // -> "gray",
ENV.CI            // -> "ci"
```

### Mothods

```javascript
const env = require("node-env-manager");

env.init(); // set `process.env.NODE_ENV` value if the value is null
env.set();  // set `process.env.NODE_ENV` value
env.get();  // get `process.env.NODE_ENV` value

env.isLocal();
env.isTest();
env.isDev();
env.isProd();
env.isExp();
env.isGray();
env.isCI();
```

[NPM_URL]: https://img.shields.io/node/v/node-env-manager.svg?style=flat-square&maxAge=600
[NPM_HREF]: https://www.npmjs.com/package/node-env-manager
[TRAVIS_URL]: https://img.shields.io/travis/Arylo/nodenv/master.svg?style=flat-square&logo=travis&maxAge=600
[TRAVIS_HREF]: https://travis-ci.org/Arylo/nodenv
[COVERALLS_URL]: https://img.shields.io/coveralls/github/Arylo/nodenv/master.svg?style=flat-square&maxAge=600
[COVERALLS_HREF]: https://coveralls.io/github/Arylo/nodenv
[SNYK_URL]: https://snyk.io/test/github/Arylo/nodenv/badge.svg?style=flat-square&maxAge=600
[SNYK_HREF]: https://snyk.io/test/github/Arylo/nodenv
[DAVID_URL]: https://img.shields.io/david/Arylo/nodenv.svg?style=flat-square&maxAge=600
[DAVID_HREF]: https://github.com/Arylo/nodenv
[AUTHOR_URL]: https://img.shields.io/badge/Author-AryloYeung-blue.svg?style=flat-square&maxAge=7200
[AUTHOR_HREF]: https://github.com/arylo
[LICENSE_URL]: https://img.shields.io/github/license/Arylo/npm-project-init.svg?style=flat-square&maxAge=7200
[LICENSE_HREF]: https://opensource.org/licenses/MIT
