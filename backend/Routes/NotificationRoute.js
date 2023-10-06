const  express =require ("express")

const router = express.Router() ;

const  {POST,GET,GETById,UPDATE,DELETE}= require("../controller/Notification");


router.post("/addnotification",POST);
router.get("/getnotifications",GET);
router.get("/getnotification",GETById);
router.put("/updatenotification",UPDATE);
router.delete("/deletenotification",DELETE) 


module.exports= router 