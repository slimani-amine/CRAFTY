const  express =require ("express")

const router = express.Router() ;

const  {GET,UPDATE,DELETE}= require("../controller/User_RUD");


router.get("/getusers",GET);
router.put("/updateuser",UPDATE);
router.delete("/deleteuser",DELETE) 


module.exports= router 