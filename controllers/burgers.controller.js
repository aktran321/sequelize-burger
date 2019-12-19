// require models
const db = require("../models");

//Create your routes
//====================================
// all of the routes are exported as a function with app passing through
module.exports = function(app) {
    //when the page is loaded, make a get request to get all burgers
    app.get("/", function(req, res) {
        //finds all Burgers, which was defined from burgers.js in models
        db.Burgers.findAll({}).then(function(result){
            //then create a an object with key burgers that handles the results of findAll
            var burgerObj = {
                burgers: result
            };
            //render the index handlebars with the created object
            res.render("index",burgerObj);
            //or render the 400 error code
        }).catch(function(err){
            res.json(400, err);
        });
    });
    //====================================
    //post route for creating burger
    //whenever this route is hit, we create a burger with the req information
    app.post("/api/burgers",function(req,res){
        console.log("console logging req")
        console.log(req);
        db.Burgers.create({
            burger_name: req.body.burger_name
        }).then(function(result){
            res.json(result);
        }).catch(function(err){
            res.json(400, err);
        })
    })
    //====================================
    //put route for updating boolean value
    app.put("/api/burgers/:id", function (req,res){
        db.Burgers.update({
            devoured: req.body.devoured
        }, {
            where: {id:req.params.id }
        }).then(function(result){
            res.json(result);
        }).catch(function(err){
            res.json(400, err);
        })
    })
    //====================================
    //delete route for deleting bugers
    app.delete("/api/burgers/:id", function(req, res){
        db.Burgers.destroy({
            where: {
                id: req.params.id 
            }.then(function(result){
                res.json(result);
            }).catch(function(err){
                res.json(400, err);
            })
        })
    })
}