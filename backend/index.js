const express = require("express");
const authroute = require("./Routes/authRoute.js");
const resertRroute = require("./Routes/reset-password-routes.js");
const ItemRoute = require('./Routes/ItemRoute.js')
const ArticleRoute = require('./Routes/ArticleRoute.js')
const OrderRoute = require('./Routes/OrderRoute.js')
const MaterialRoute = require('./Routes/MaterialRoute.js')
const CommentRoute = require('./Routes/CommentRoute.js')
const ImageRoute = require('./Routes/ImageRoute.js')
const ReviewRoute = require('./Routes/ReviewRoute.js')
const TagRoute = require('./Routes/TagRoute.js')
const UserRoute = require('./Routes/UserRoute.js')
const AdressRoute = require('./Routes/AdressRoute.js')
const NotificationRoute = require('./Routes/NotificationRoute.js')
const FavouriteItemRoute = require('./Routes/FavouriteItemRoute.js')
const WishlistRoute = require('./Routes/WishlistRoute.js')




const { Server } = require("socket.io");
const app = express();
const PORT = 4000;
const http = require("http");
const cors = require("cors");
const server = http.createServer(app);






app.use(express.json());

app.use(cors());
app.use("/auth", authroute);
app.use("/reset", resertRroute);
app.use("/item",ItemRoute);
app.use("/article",ArticleRoute);
app.use("/order",OrderRoute);
app.use("/material",MaterialRoute);
app.use("/comment",CommentRoute);
app.use("/image",ImageRoute);
app.use("/review",ReviewRoute);
app.use("/tag",TagRoute);
app.use("/user",UserRoute);
app.use("/adress",AdressRoute);
app.use("/notification",NotificationRoute);
app.use("/favourite",FavouriteItemRoute);
app.use("/wishlist",WishlistRoute);

server.listen(PORT, () => {
  console.log(`listening on port ${PORT}`);
});
