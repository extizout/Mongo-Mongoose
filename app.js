//Learn CRUD of mongoose for MongoDB

const mongoose = require('mongoose');

//Connect & Create a DB if its not exist.
const collection = "people";
const conn = mongoose.connect("mongodb://localhost:27017/" + collection);

//Create a Fruit Schema
const fruitSchema = new mongoose.Schema({
  name: String,
  rating: Number,
});

// Create a People Schema.
const peopleSchema = new mongoose.Schema({
  name: {
    type: String,
    required: true //Validation name
  },
  age: {
    type: Number,
    min: 0, //Validation min value
    max: 100 //Validation max value
  },
  favFruit: fruitSchema
});
//Create a model for fruits collection
const fruit = new mongoose.model("fruit", fruitSchema);
// Create a People Collection Model.
const person = mongoose.model("person", peopleSchema);

const pineapple = new fruit({
  name: "pineapple",
  rating: 5
})

pineapple.save();


// Create a object from mongoose model.
const personAdd = new person({
  name: "Haerin",
  age: 17,
  favFruit: pineapple
});

personAdd.save();

// fruits Collection
//Create a apple fruit model recorded.
const apple = new fruit({
  name: "apple",
  rating: 2
})
//Create a orange fruit model recorded.
const orange = new fruit({
  name: "orange",
  rating: 3
})
//Create a banana fruit model recorded.
const banana = new fruit({
  name: "banana",
  rating: 5
})
// Insert many data into a collection in one function.

// fruit.insertMany([apple, banana, orange], (err)=>{
//   if (err){
//     console.log(err);
//   }else{
//     console.log("Succesfully Save Fruit");
//   }
// })

// Read & Find data in fruit collection.
 fruit.find((err, fruits) => {
  if (err) {
    console.log(err);
  } else {
    fruits.forEach(
      (fruit) => {
        console.log(fruit.name);
      });
    //Close MongoDB Connection. (Must)
    // mongoose.connection.close();
    // mongoose.disconnect();

  };
});

// Update a exist recorded in collection
// fruit.updateOne({_id:"63bfd30c62e4f1f2c9526eaa"}, {name:"Peach"},(err)=>{
//   if(err){console.log(err);}else{console.log("Succesfully Updated.");}
// })

// //Delete many recorded at once.
// fruit.deleteMany(
// {
//   name: null,
//   rating: 5
// }, (err) => {
//   if (err) {
//     console.log(err);
//   } else {
//     console.log("Succesfully Deleted.");
//   }
// });
