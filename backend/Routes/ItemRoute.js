const  express =require ("express")

const router = express.Router() ;

const  {POST,GET,GETById,UPDATE,DELETE}= require("../controller/Item");


router.post("/additem",POST);
router.get("/getitems",GET);
router.get("/getitem",GETById);
router.put("/updateitem",UPDATE);
router.delete("/deleteitem",DELETE) 


module.exports= router 