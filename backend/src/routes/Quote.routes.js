const {Router} = require("express");
const { getAll, create, put, _delete } = require("../controllers/quote.controller");
const isAdmin = require("../middlewares/is-admin");

const router = Router();

router.get("/quotes", getAll);
router.post("/quote", create);
router.put("/quote/:id", isAdmin, put);
router.delete("/quote/:id", isAdmin, _delete);

module.exports = router;