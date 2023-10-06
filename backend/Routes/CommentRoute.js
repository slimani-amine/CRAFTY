const  express =require ("express")

const router = express.Router() ;

const  {POST,GET,GETById,UPDATE,DELETE}= require("../controller/Comment");


router.post("/addcomment",POST);
router.get("/getcomments",GET);
router.get("/getcomment",GETById);
router.put("/updatecomment",UPDATE);
router.delete("/deletecomment",DELETE) 


module.exports= router 