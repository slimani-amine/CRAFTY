const  express =require ("express")
const login  = require  ("../controller/login.js");
const SignUp  = require  ("../controller/signup.js");
 const router = express.Router() ;
router.post("/login",login);
router.post("/signup",SignUp)

module.exports= router