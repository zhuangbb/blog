const fs = require('fs')
const merge = require('webpack-merge')
const config = {
  NODE_ENV: '"production"',
  api: '"http://192.168.1.101:5000"'
}

module.exports = config
