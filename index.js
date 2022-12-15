const express = require("express");
const mongoose = require("mongoose");
const ItemModel = require("./schema")

const app = express();
app.use(express.json());
mongoose.set("strictQuery",true)

app.get("/",(req,res)=>{
    res.send("home page")
})

app.post("/item",async(req,res)=>{
    const data = req.body
    const item = new ItemModel(data)
    await item.save()
    res.status(200).send("added data successfully")
})

mongoose.connect("mongodb+srv://aman:amantrivedi@cluster0.ddklfbc.mongodb.net/revisionshop").then(()=>{
    app.listen(8080,()=>{
        console.log("i am hearig on 8080")
    })
})
