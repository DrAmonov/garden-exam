const {Router} = require("express");
const { getAll, create, put, _delete } = require("../controllers/admin.controller");
const isAdmin = require("../middlewares/is-admin");
const isSuperAdmin = require("../middlewares/is-superAdmin");

const router = Router();

router.get("/admins", isSuperAdmin, getAll);
router.post("/admin", isSuperAdmin,  create);
router.put("/admin", isAdmin, put);
router.delete("/admin/:id", isSuperAdmin, _delete);

module.exports = router;