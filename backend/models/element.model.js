module.exports = (sequelize, Sequelize) => {
  const Element = sequelize.define("element", {
    name: {
        
      type: Sequelize.STRING
    },
    treatment: {
      type: Sequelize.STRING
    },
    description: {
        type: Sequelize.STRING
    }
  });

  return Element;
}