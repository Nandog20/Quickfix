/* eslint-disable no-undef */
//dependencias

const express = require("express");
const app = express();
const mysql = require("mysql2");
const cors = require("cors");

app.use(cors());
app.use(express.json());

//conexión base de datos separar a un env
const db = mysql.createConnection({
    host: "localhost",
    user: "root",
    password:"root",
    database: "quickfix"
})

//post nuevos usuarios
    app.post("/register", (req,res)=>{
        const nombre = req.body.nombre;
        const paterno = req.body.paterno;
        const materno = req.body.materno;
        const correo = req.body.email;
        const password = req.body.password;

    db.query('INSERT INTO users (nombre, apellidop, apellidom, correo, pass) VALUES (?,?,?,?,?)', [nombre, paterno, materno, correo, password],
        (err,result)=>{
            if(err){
                console.log(err);
            }
            else{
                res.send("Usuario registrado" + result)
            }
        }
    )
    })

//post nuevos productos
    app.post("/NewProduct",(req, res)=>{
        const producto = req.body.producto;
        const stock = req.body.stock;
        const precio = req.body.precio;
        const image = req.body.image;
        const desc = req.body.desc;

    db.query('INSERT INTO productos (nombre, stock, precio, descripción, img) VALUES (?,?,?,?,?)', [producto, stock, precio, desc, image],
        (err, result)=>{
            if(err){
                console.log(err);
            }
            else{
                res.send("Producto registrado " + result)
            }
        }
    )

})

//Obtener todos los productos
    app.get("/products",(req,res)=>{
        db.query('SELECT * FROM productos',(err, result)=>{
            if(err){
                console.log(err);
            }
            else{
                res.json(result);
            }
        })
    })

//listener
app.listen(3001,()=>{
    console.log("Funcionando en el puerto 3001")
})