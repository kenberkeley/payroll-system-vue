# MYOB Payroll System

![build](https://img.shields.io/badge/build-passing-brightgreen.svg)
[![JavaScript Style Guide](https://img.shields.io/badge/code_style-standard-brightgreen.svg)](https://standardjs.com)
![node>=8.6](https://img.shields.io/badge/node-%3E%3D%208.6-brightgreen.svg)

## § Features
> Powered by [Vue CLI 3.x](https://github.com/vuejs/vue-cli)

* Basics: Vue + Vuex + Vue Router + Vue Meta + Axios
* Build flow: npm scripts + Webpack + ESLint (Standard) + Babel
* UI library: Bulma (Sass, unused styles eliminated by PurgeCSS)
* API & authentication: Express + LowDB + JWT
* Testing: Jest (Unit), Cypress (E2E), Supertest (API)

## § Prerequisites

* Node.js >= 8.6
* UNIX-like terminal

If you have not installed Node.js, you may need this [guide](https://docs.npmjs.com/downloading-and-installing-node-js-and-npm).  
If you are a Windows user, consider using [Git bash](https://gitforwindows.org) as your primary terminal.

## $ Quick Start

```sh
# Install dependencies
$ npm i

# Start API & Webpack dev servers
$ npm run dev
```

## § Tests

```sh
# Run lints
$ npm run lint

# Run unit tests
$ npm run test:unit

# Run end-to-end tests
$ npm run start:api
$ npm run test:e2e # in another terminal
# npm run test:e2e:headless # Headless mode

# Or, run above all by the one-liner:
$ npm t
# Ctrl + C to stop the API server after the test run ends
```

## § Deployment

```sh
# Compile for production
$ npm run build
# npm run build -- --report # generate report.html to analyze bundle content
```

Check out [`vue-cli-service build`](https://cli.vuejs.org/guide/cli-service.html#vue-cli-service-build) for more options.

Also, see [here](https://cli.vuejs.org/guide/deployment.html) for deployment guidelines.
