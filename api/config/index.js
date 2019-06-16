// Written in CommonJS, as this file is also used by vue.config.js

module.exports = {
  API_PORT: 9527,

  // For security, better use `dotenv` etc in a real producation
  // For more info, please turn to https://12factor.net/config
  JWT_SECRET: 'myob.com',

  ADMIN_USER: {
    username: 'myob',
    password: 'CremorneVIC3121'
  }
}
