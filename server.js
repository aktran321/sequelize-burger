const express = require('express');
const app = express();
const PORT = process.env.PORT || 8080;
const db = require("./models");

app.use(express.urlencoded({ extended:true }));
app.use(express.json());
app.use(express.static("public"));
//=======================================

const exphbs = require("express-handlebars");

app.engine("handlebars", exphbs({defaultLayout: "main"}))
app.set("view engine", "handlebars");

//=======================================
//Routes

require("./controllers/burgers_controller.js")(app);

// Listen

db.sequelize.sync({}).then(function() {
    app.listen(PORT, function() {
        console.log("App listening on http://localhost:" + PORT);
    })
})