const express = require("express");
const router = express.Router();
const multer = require('multer');
const storage = multer.diskStorage({
  destination: (req, file, cb) => {
    cb(null, 'uploads')
  },
  filename: (req, file, cb) => {
    cb(null, file.fieldname + '-' + Date.now())
  }
});
const upload = multer({ storage: storage });

const PerspectivesController = require("../controllers/perspectives");

router.get("/", PerspectivesController.Index);
router.post("/", upload.single('perspective'), PerspectivesController.Create);
router.get("/new", PerspectivesController.New);



module.exports = router;
// 