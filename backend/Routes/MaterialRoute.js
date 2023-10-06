const  express =require ("express")

const router = express.Router() ;

const  {POST,GET,GETById,UPDATE,DELETE}= require("../controller/Material");


router.post("/addmaterial",POST);
router.get("/getmaterials",GET);
router.get("/getmaterial",GETById);
router.put("/updatematerial",UPDATE);
router.delete("/deletematerial",DELETE) 


module.exports= router 