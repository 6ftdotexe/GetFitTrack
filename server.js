// Server
const express = require("express");
const mongoose = require("mongoose");
const routes = require("./routes/apiRoutes");
const htmlRoutes = require("./routes/htmlRoutes");

const app = express();
const PORT = 8000;

app.use(express.urlencoded({ extended: true }));
app.use(express.json());
app.use(express.static('public'));

var MONGODB_URI = "mongodb://localhost/workout";
mongoose.connect(MONGODB_URI, {
    useNewUrlParser: true,
    useFindAndModify: false
})

app.use(routes);
app.use(htmlRoutes);

app.listen(PORT, () => {
    console.log("App listening on Port " + PORT);
}); 