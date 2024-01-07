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

app.post("/create",(req,res)=>{
    const name = req.body.name;
    const code = req.body.code;
    const correlativas = req.body.correlativas;
    

    db.query('INSERT INTO assignatures(name,code,correlativas) VALUES(?,?,?)',[name,code,correlativas],
    (err,result)=>{
        if(err){
            console.log(err);
        }else{
            res.send(result);
        }
    }
    );

 });


 app.put("/update",(req,res)=>{
    const id = req.body.id;
    const name = req.body.name;
    const code = req.body.code;
    const correlativas = req.body.correlativas;
    

    db.query('UPDATE assignatures SET name=?,code=?,correlativas=? WHERE id=?',[name,code,correlativas,id],
    (err,result)=>{
        if(err){
            console.log(err);
        }else{
            res.send(result);
        }
    }
    );

 });

 app.delete("/delete/:id",(req,res)=>{
    const id = req.params.id;

    db.query('DELETE FROM assignatures WHERE id=?',id,
    (err,result)=>{
        if(err){
            console.log(err);
        }else{
            res.send(result);
        }
    }
    );

 });



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


app.get("/materia/:id",(req,res)=>{
    const id = req.params.id;
    db.query('SELECT * FROM assignatures WHERE id=?',id,
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