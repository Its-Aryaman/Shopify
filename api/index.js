import dotenv from "dotenv";
import express from "express";
import db_connect from "./Db.js";
import router from "./routes/routes.js";
import cookieParser from "cookie-parser";

dotenv.config({path: '../.env'})



const app = express();
const port = process.env.PORT || 3000;


app.use(express.json())
app.use(cookieParser())




app.use('/api/v1',router)


db_connect().then(app.listen(port, () => {
    console.log(`Server is listening on port ${port}`);
}))




