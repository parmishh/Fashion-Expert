var mongoose = require("mongoose")
var Schema = mongoose.Schema

var schema = new Schema({
    imagePath: { type: String, required: true },
    title: { type: String, required: true },
    description: { type: String, required: true },
    price: { type: Number, required: true },
    addedByUsers: [{ type: String }],  // Array of user names who added the product
    orderedByUsers: [{ type: String }]  // Array of user names who ordered the product
})

module.exports = mongoose.model("Product", schema)
