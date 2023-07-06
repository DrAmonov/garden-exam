const {Router} = require("express");
const { getAll, create, _delete } = require("../controllers/contact.controller");
const isAdmin = require("../middlewares/is-admin");

const router = Router();

router.get("/contacts", isAdmin, getAll);
router.post("/contact", create);
router.delete("/contact/:id", isAdmin, _delete);

module.exports = router;