const express = require("express");
const app = express();
const mysql = require("mysql")
const cors = require("cors");

app.use(cors());
app.use(express.json());

const db =mysql.createConnection({
    host: "localhost",
    user: "root",
    password:"12345",
    database: "universad"
});

// app.post("/create",(req,res)=>{
//     console
// });



app.get("/assignatures",(req,res)=>{
    db.query('SELECT * FROM assignatures',
    (err,result)=>{
        if(err){
            console.log(err);
        }else{
            res.send(result)
        }
    })
    }
);



app.listen(3006,()=>{
    console.log("corriendo en el puerto 3006");
})