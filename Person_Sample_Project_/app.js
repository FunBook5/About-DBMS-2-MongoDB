const mongoose = require("mongoose");

mongoose.connect("mongodb://localhost:27017/peopleDB");

const peopleSchema = new mongoose.Schema({

    name: String,
    age : Number,
    hobby : String

});

const People = mongoose.model("People",peopleSchema);

const people1 = new People({
// If only inserting one -> like insertOne() in shell
name:"Abhinav",
age: 22,
hobby: "coding"

});

// if we want to insertMany then we make the 2nd person here and use insertMany.

const people2 = new People({

name: "Priya",
age: 28,
hobby: "travelling"


})

//insertMany takes two parameters, the elements you want to insert and an error function.

People.insertMany([people1,people2],function(err){
    if(err){
        console.log("unsucessful due to " + err);
    }
    else{
        console.log("success");
    }
})

//people1.save(); -- not necessary.