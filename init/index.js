const express = require("express");
const mongoose = require("mongoose");
const User = require("../models/user");

const app = express();
const PORT = 8381;
const MONGO_URL = `mongodb+srv://singhmitali1811:XWCCXUJbAWFQNmpV@cluster0.f1mx3ju.mongodb.net/?retryWrites=true&w=majority&appName=Cluster0`

app.listen(PORT , () => {
    console.log(`Server is listening to port number ${PORT}`);
})

main()
.then( () => {
    console.log("Connection Successfull");
})
.catch((err) => {
    console.log(err);
})

async function main() {
    await mongoose.connect(MONGO_URL);

}

const initilizeDB = async() => {
    await User.deleteMany({});
    console.log("Initialisation Successfull");
}

initilizeDB();

