const  express =require ("express")

const router = express.Router() ;

const  {POST,GET,GETById,UPDATE,DELETE}= require("../controller/Image");


router.post("/addimage",POST);
router.get("/getimages",GET);
router.get("/getimage",GETById);
router.put("/updateimage",UPDATE);
router.delete("/deleteimage",DELETE) 


module.exports= router 