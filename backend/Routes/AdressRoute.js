const  express =require ("express")

const router = express.Router() ;

const  {POST,GET,UPDATE,DELETE}= require("../controller/Adress");


router.post("/addadress",POST);
router.get("/getadresss",GET);
router.put("/updateadress",UPDATE);
router.delete("/deleteadress",DELETE) 


module.exports= router 