const Keystore = require('./keystore')
const Keygen = require('./keygen')

const ecc = require('arisenjs-ecc')

module.exports = {
  Keystore,
  Keygen,
  modules: {
    ecc
  }
}
