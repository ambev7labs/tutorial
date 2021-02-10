module.exports = (sequelize, Sequelize) => {
    const User = sequelize.define("user", {
      ambevId: {
        type: Sequelize.INTEGER
      },
      name: {
        type: Sequelize.STRING
      },
      area: {
        type: Sequelize.STRING
      }
    });
  
    return User;
  };