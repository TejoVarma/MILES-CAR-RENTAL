const express = require("express");
const router = express.Router();
const { userLogin, userRegister, adminLogin, adminRegister, getSingleadmin, adminSecretCheck, userSecretCheck, adminPasswordReset, userPasswordReset } = require("../controllers/logins.controller");
router.post("/admin/register", adminRegister);
router.post("/admin/login", adminLogin);
router.post("/user/register", userRegister);
router.post("/user/login", userLogin);

router.post("/admin/secret-check", adminSecretCheck);
router.post("/user/secret-check", userSecretCheck);

router.put("/admin/password-reset", adminPasswordReset);
router.put("/user/password-reset", userPasswordReset);

router.get("/admin/:id", getSingleadmin);


module.exports = router;