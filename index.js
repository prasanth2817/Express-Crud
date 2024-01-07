const express= require('express')//importing express library into this file 
const AppRoutes= require('./src/Routes')//importing routes to variable
const cors= require("cors")
const app = express();
const dotenv = require("dotenv")
dotenv.config()
const PORT =process.env.PORT
app.use(cors())
app.use(express.json());//parsing the input into json 
app.use((req, res, next) => {
    res.type('application/javascript');
    next();
  });

app.use('/',AppRoutes)//uses routes

app.listen(PORT, () => console.log(`server is listening to ${PORT}`));//port set to 8000
 