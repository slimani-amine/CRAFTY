const  express =require ("express")

const router = express.Router() ;

const  {POST,GET,GETById,UPDATE,DELETE}= require("../controller/Wishlist");


router.post("/addwishlist",POST);
router.get("/getwishlists",GET);
router.get("/getwishlist",GETById);
router.put("/updatewishlist",UPDATE);
router.delete("/deletewishlist",DELETE) 


module.exports= router 