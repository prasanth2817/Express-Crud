const express= require('express')//importing express library into this file 
const AppRoutes= require('./src/Routes')//importing routes to variable
const app = express();
const dotenv = require("dotenv")
dotenv.config()
const PORT =process.env.PORT
app.use(express.json());//parsing the input into json 

app.use('/',AppRoutes)//uses routes

app.listen(PORT, () => console.log(`server is listening to ${PORT}`));//port set to 8000
 