const  express =require ("express")

const router = express.Router() ;

const  {POST,GET,GETById,UPDATE,DELETE}= require("../controller/Review");


router.post("/addreview",POST);
router.get("/getreviews",GET);
router.get("/getreview",GETById);
router.put("/updatereview",UPDATE);
router.delete("/deletereview",DELETE) 


module.exports= router 