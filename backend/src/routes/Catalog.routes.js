const {Router} = require("express");
const { getAll, create, put, _delete } = require("../controllers/catalog.controller");
const isAdmin = require("../middlewares/is-admin");
const fileUpload = require("../middlewares/fileupload");

const router = Router();

router.get("/catalogs", getAll);
router.post("/catalog", isAdmin, fileUpload, create);
router.put("/catalog/:id", isAdmin, put);
router.delete("/catalog/:id", isAdmin, _delete);

module.exports = router;