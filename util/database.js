const Sequelize = require('sequelize'); 

const sequelize = new Sequelize('jabe', 'root', 'CHECO1', {
    host: 'locahost', 
    dialect: 'mysql'    
}); 

module.exports = sequelize; 