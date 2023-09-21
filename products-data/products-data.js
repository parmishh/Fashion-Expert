var Product = require("../models/product")

var mongoose = require("mongoose");
const dotenv = require('dotenv').config();

const mongo_uri = process.env.mongo_uri;

const connect = mongoose.connect(mongo_uri, { useUnifiedTopology: true, useNewUrlParser: true});
connect.then((db)=>{
    console.log("Database Connected Successfully");
}, (err)=>{
    console.log("Error occur while connecting ", err);
})

var products = [
    new Product({
        imagePath: "http://via.placeholder.com/200x200/grey?text=Product",
        title: "Product 1",
        description:
            "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged.",
        price: 269
    }),
    new Product({
        imagePath: "http://via.placeholder.com/200x200/grey?text=Product",
        title: "Product 2",
        description:
            "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged.",
        price: 209
    }),
    new Product({
        imagePath: "http://via.placeholder.com/200x200/grey?text=Product",
        title: "Product 3",
        description:
            "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged.",
        price: 169
    }),
    new Product({
        imagePath: "http://via.placeholder.com/200x200/grey?text=Product",
        title: "Product 4",
        description:
            "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged.",
        price: 79
    }),
    new Product({
        imagePath: "http://via.placeholder.com/200x200/grey?text=Product",
        title: "Product 5",
        description:
            "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged.",
        price: 108
    }),
    new Product({
        imagePath: "http://via.placeholder.com/200x200/grey?text=Product",
        title: "Product 6",
        description:
            "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged.",
        price: 99
    }),
     new Product({
        imagePath: "http://via.placeholder.com/200x200/grey?text=Product",
        title: "Product 7",
        description:
            "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged.",
        price: 99
    })
    
]

var done = 0
for (var i = 0; i < products.length; i++) {
    products[i].save(function (err, result){
        done++
        if (done === products.length) {
            exit()
        }
    })
}

function exit(){
    mongoose.disconnect()
}
