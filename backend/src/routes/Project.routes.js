const {Router} = require("express");
const { getAll, create, put, _delete, getCompletes } = require("../controllers/project.controller");
const isAdmin = require("../middlewares/is-admin");
const fileUpload = require("../middlewares/fileupload");

const router = Router();

router.get("/projects", getAll);
router.get("/project", getCompletes);
router.post("/project", isAdmin, fileUpload, create);
router.put("/project/:id", isAdmin, put);
router.delete("/project/:id", isAdmin, _delete);

module.exports = router;