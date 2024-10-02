const mongoose = require('mongoose')

mongoose.connect("mongodb+srv://sachin03nic:sachin03nic@animal-welfare-cluster.vjfp9.mongodb.net/animalwelfare?retryWrites=true&w=majority&appName=animal-welfare-cluster").then(() => {
    console.log("Connected to database successfully");
}).catch((err) => {
    console.log("Failed to connect with backend : " + err);
})