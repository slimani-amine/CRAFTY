const  express =require ("express")

const router = express.Router() ;

const  {POST,GET,GETById,UPDATE,DELETE}= require("../controller/Tag");


router.post("/addtag",POST);
router.get("/gettags",GET);
router.get("/gettag",GETById);
router.put("/updatetag",UPDATE);
router.delete("/deletetag",DELETE) 


module.exports= router 