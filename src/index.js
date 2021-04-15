const express = require("express");
const mongoose = require("mongoose");
const authRoutes = require("./routes/authRoutes");
const { PASSWORD } = require("../mongoDBCredentials/credentials");

const app = express();

app.use(authRoutes);

const credentials = require("../mongoDBCredentials/credentials");

const mongoUri = `mongodb+srv://admin:${PASSWORD}@cluster0.efomg.mongodb.net/myFirstDatabase?retryWrites=true&w=majority`;
mongoose.connect(mongoUri, {
    useNewUrlParser: true,
    useCreateIndex: true,
    useUnifiedTopology: true,
});
mongoose.connection.on("connected", () => {
    console.log("Connected to mongo instance");
});
mongoose.connection.on("error", (err) => {
    console.error("Error connecting to mongo", err);
});

app.listen(3000, () => {
    console.log("Listening on port 3000");
});
