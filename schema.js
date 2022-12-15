const {Schema,model} = require("mongoose")

const ItemSchema = new Schema({
    title:String,
    quantity:Number,
    priority:String,
    desc : String,
},{timestamps:true})

const ItemModel = new model("item",ItemSchema)

module.exports = ItemModel