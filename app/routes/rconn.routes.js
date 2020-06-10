module.exports = (app) => {
  const rconnAPI = require("../controllers/rconn.controller.js");

  var router = require("express").Router();

  router.post("/", rconnAPI.create);

  router.get("/", rconnAPI.findAll);

  router.get("/published", rconnAPI.findAllRecruiter);

  router.get("/:id", rconnAPI.findOne);

  router.put("/:id", rconnAPI.update);

  router.delete("/:id", rconnAPI.delete);

  app.use("/api/v1", router);
};
