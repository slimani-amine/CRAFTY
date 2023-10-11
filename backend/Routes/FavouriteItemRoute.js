const  express =require ("express")

const router = express.Router() ;

const  {POST,GET,GETById,UPDATE,DELETE}= require("../controller/FavouriteItem");


router.post("/addfavourite",POST);
router.get("/getfavourites",GET);
router.get("/getfavourite",GETById);
router.put("/updatefavourite",UPDATE);
router.delete("/deletefavourite",DELETE) 


module.exports= router 