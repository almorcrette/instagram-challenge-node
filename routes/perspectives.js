const express = require("express");
const router = express.Router();


const PerspectivesController = require("../controllers/perspectives");

router.get("/", PerspectivesController.Index);
router.post("/", PerspectivesController.Create);
router.get("/new", PerspectivesController.New);



module.exports = router;
// 