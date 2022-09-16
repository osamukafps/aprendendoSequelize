const { Sequelize } = require('sequelize')

const sequelize = new Sequelize('nodesequelize', 'root', 'samuel123', {
  host: 'localhost',
  dialect: 'mysql',
})

try {
  sequelize.authenticate()
  console.log('Sequelize Connected!')
} catch (error) {
  console.error('Connection doesnt working: ', error)
}

module.exports = sequelize