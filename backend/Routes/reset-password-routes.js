const  express = require ("express")
const {Verify,Sendverification}  = require  ("../controller/reset-password");

const router = express.Router() ;
router.post("/reset-password/send",Sendverification);
router.post("/reset-password/verify",Verify)

module.exports= router