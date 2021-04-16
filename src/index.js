require("./models/User");
require("./models/Track");
const express = require("express");
const mongoose = require("mongoose");
const bodyParser = require("body-parser");
const authRoutes = require("./routes/authRoutes");
const trackRoutes = require("./routes/trackRoutes");
const requireAuth = require("./middlewares/requireAuth");

const { PASSWORD } = require("../mongoDBCredentials/credentials");

const app = express();

app.use(bodyParser.json());
app.use(authRoutes);
app.use(trackRoutes);

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

app.get("/", requireAuth, (req, res) => {
    try {
        res.send(`Your email is: ${req.user.email}`);
    } catch (err) {
        return res.status(401).send(err.message);
    }
});

app.listen(3000, () => {
    console.log("Listening on port 3000");
});
