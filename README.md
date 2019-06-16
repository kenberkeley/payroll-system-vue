# MYOB Payroll System

![build](https://img.shields.io/badge/build-passing-brightgreen.svg)
[![JavaScript Style Guide](https://img.shields.io/badge/code_style-standard-brightgreen.svg)](https://standardjs.com)
![node>=8.6](https://img.shields.io/badge/node-%3E%3D%208.6-brightgreen.svg)

## § Features
> Mostly powered by [Vue CLI 3.x](https://github.com/vuejs/vue-cli)

* Basics: Vue + Vuex + Vue Router + Vue Meta + Axios + Bulma
* API & authentication: Express + LowDB (tiny JSON DB) + JWT
* Build flow: npm scripts + Webpack + ESLint (Standard) + Babel
* Comprehensive testing: Jest (Unit), Cypress (E2E), Supertest (API)

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
# Then open http://localhost:8080
```

## $ Project Structure

```
# Trivial folders and files had been omitted
.
├── api/ # API server source
│   ├── config/
│   ├── db/
│   │   ├── db.json # Can access to the data at any time
│   │   └── index.js
│   ├── middlewares/
│   ├── modules/ # Folder-by-feature
│   │   ├── auth/
│   │   └── payslips/
│   │       ├── controllers.js
│   │       └── router.js
│   ├── utils/
│   └── main.js
├── public/
│   ├── favicon.ico
│   └── index.html
├── src/ # Front-end source
│   ├── assets/
│   ├── components/ # Use by multiple pages only
│   ├── constants/ # All global scope keys (URL query, storage, etc) should go here to avoid name collisions
│   │   ├── LocalStorageKeys.js
│   │   └── RouteFields.js
│   ├── layouts/
│   │   ├── _comps/ # Use by layouts only
│   │   │   ├── Footer.vue
│   │   │   └── Header.vue
│   │   └── main.vue
│   ├── pages/
│   │   ├── auth/
│   │   │   └── login.vue
│   │   └── generator/ # Has its own private comps, utils, etc
│   │       ├── _assets/
│   │       ├── _comps/
│   │       ├── _mixins/
│   │       ├── _utils/
│   │       ├── _store.js # Lazy-register Vuex module
│   │       ├── 1-capture.vue
│   │       ├── 2-preview.vue
│   │       └── index.vue
│   ├── router/
│   ├── store/
│   │   ├── auth.js # Pre-register Vuex module
│   │   └── index.js
│   ├── utils/
│   ├── App.vue # Root comp
│   └── main.js
├── tests/
│   ├── e2e/
│   └── unit/ # Empty. Please place test files next to the implementation
└── vue.config.js
```

Reference:
* [Folder-by-type or Folder-by-feature (Stack Exchange)](https://softwareengineering.stackexchange.com/a/338610)
* [Node.js Project Structure Tutorial (RisingStack)](https://blog.risingstack.com/node-hero-node-js-project-structure-tutorial)
* [How to better organize your React applications? (Medium)](https://medium.com/@alexmngn/how-to-better-organize-your-react-applications-2fd3ea1920f1)

## § Tips & tricks

* With the help of [link-module-alias](https://github.com/Rush/link-module-alias):
  * Before: `require('../../../../../<project root>/xxx/yyy')`
  * Now: `require('~/xxx/yyy')`

* API server supports ES Module with [esm](https://github.com/standard-things/esm). No longer need Babel.

* [vuex-map-fields](https://github.com/maoberlehner/vuex-map-fields) enables two-way data binding for form fields saved in a Vuex store.

* Moment.js is cumbersome? [Day.js](https://github.com/iamkun/dayjs) to save! Only 2KB (min+gzipped), with the same but immutable API.

* Only used a few classes from Bulma, but the bundle CSS is [large](https://bundlephobia.com/result?p=bulma) (204.7KB min, 25.3KB min+gzipped).  
  After introducing [PurgeCSS](https://github.com/FullHuman/purgecss), the final bundle sharply reduced to ~3KB (min+gzipped).

## § Tests

```sh
# Run lints
$ npm run lint

# Run unit tests
$ npm run test:unit

# Run end-to-end tests
$ npm run start:api # Start API server firstly
$ npm run test:e2e # In another terminal. Cypress will pop up later
# npm run test:e2e:headless # Headless mode

# Or, run above all by the one-liner:
$ npm t
# Ctrl + C to stop the API server in the end
```

## § Deployment

```sh
# Compile for production
$ npm run build
# npm run build -- --report # generate report.html to analyze bundle content
```

Check out [`vue-cli-service build`](https://cli.vuejs.org/guide/cli-service.html#vue-cli-service-build) for more options.

Also, see [here](https://cli.vuejs.org/guide/deployment.html) for deployment guidelines.
