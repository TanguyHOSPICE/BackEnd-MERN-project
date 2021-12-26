//****** Etape 21----vid--33m31s
const router = require('express').Router();
const authController = require('../controllers/auth.controller')
router.post("/register", authController.signUp); 

module.exports = router;