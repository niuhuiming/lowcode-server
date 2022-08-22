const mariasql = require('mariadb');

const db = mariasql.createPool({
  host: '127.0.0.1',
  port: '3307',
  user: 'root',
  password: 'root',
  database: 'lowcodeData'
})

module.exports = db;