const Sequelize = require('sequelize'); 

const sequelize = require('../util/database'); 

const Product = sequelize.define('productos', {
  id:{
    type: INTEGER, 
    autoIncrement: true, 
    allowNull: false, 
    primaryKey: true
  }, 
  nombre:{
    type: sequelize.STRING, 
    allowNull: false
  }, 
  itemno:{
    type: sequelize.STRING, 
    allowNull: false
  }, 
  porcaja:{
    type: sequelize.INTEGER, 
    allowNull: false
  }, 
  precio:{
    type: sequelize.DECIMAL(10, 2), 
    allowNull: false
  }, 
  activo:{
    type: sequelize.BOOLEAN, 
    allowNull: false, 

  }, 
  stock:{
    type: sequelize.BOOLEAN, 
    allowNull: false
  }, 
  foto:{
    type: sequelize.STRING, 
    allowNull: false
  }, 
  created_at:{
    type: sequelize.DATE, 
    allowNull: false
  },
  info1:{
    type: sequelize.STRING, 
    allowNull: false
  },
  cat:{
    type: sequelize.INTEGER, 
    allowNull: false
  },
  subcat:{
    type: sequelize.INTEGER, 
    allowNull: false
  },
  oferta:{
    type: sequelize.BOOLEAN, 
    allowNull: false
  },
  saldo:{
    type: sequelize.BOOLEAN, 
    allowNull: false
  },
  mejorprecio:{
    type: sequelize.BOOLEAN, 
    allowNull: false
  },
  nuevo:{
    type: sequelize.BOOLEAN, 
    allowNull: false
  } 
})

module.exports = Product;
