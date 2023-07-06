const {Router} = require("express");
const { getAll, create, put, _delete } = require("../controllers/member.controller");
const isAdmin = require("../middlewares/is-admin");
const fileUpload = require("../middlewares/fileupload");

const router = Router();

router.get("/members", getAll);
router.post("/member", isAdmin, fileUpload, create);
router.put("/member/:id", isAdmin, put);
router.delete("/member/:id", isAdmin, _delete);

module.exports = router;