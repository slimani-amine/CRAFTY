 const express =require ("express")
const authroute = require('./Routes/authRoute.js')
const app = express();
const PORT = 4000;
const cors = require ('cors')
app.use(express.json())
app.use(cors())
app.use("/auth",authroute)
app.listen(PORT, () => {
  console.log(`listening on port ${PORT}`);
});
