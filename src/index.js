const express = require('express');
const  app = express();
const connect = require("./configs/db");
const userControler = require('./controllers/user.controller');

app.use(express.json())
app.use("/users" , userControler)


app.listen(5000, async  () => {
    try {
         await connect();
        console.log("listenting on port 5000");
    } catch (error) {
        console.error(error.message);
    }
});
