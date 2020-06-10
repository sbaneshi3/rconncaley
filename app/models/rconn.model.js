module.exports = (sequelize, Sequelize) => {
  const Rconn = sequelize.define("rconn", {
    lName: {
      type: Sequelize.STRING,
    },
    fName: {
      type: Sequelize.STRING,
    },
    email: {
      type: Sequelize.STRING,
    },
    password: {
      type: Sequelize.STRING,
    },
    recruiter: {
      type: Sequelize.BOOLEAN,
    },
  });

  return Rconn;
};
