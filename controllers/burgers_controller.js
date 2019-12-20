// ====================================================
// DEPENDENCIES
// ====================================================
const db = require("../models");
// ====================================================
// ROUTES
// ====================================================
module.exports = function(app) {
    app.get("/", function(req, res) {
        db.Burgers.findAll({}).then(function(result) {
        var burgerObj = {
            burgers: result
        };
        res.render("index", burgerObj);
        }).catch(function(err){
        res.json(400, err);
        });
    });
    // ====================================================
    app.post("/api/burgers", function(req, res){
        db.Burgers.create({
        burger_name: req.body.burger_name
        }).then(function(result){
        res.json(result);
        }).catch(function(err){
        res.json(400, err);
        });
    });
    // ====================================================
    app.put("/api/burgers/:id", function(req, res) {
        console.log(req.body.devoured);
        db.Burgers.update({
        devoured: req.body.devoured
        }, { 
        where: { id: req.params.id }
        }).then(function(result){
        res.json(result);
        }).catch(function(err){
        res.json(400, err);
        });
    });
    // ====================================================
    app.delete("/api/burgers/:id", function(req, res) {
        db.Burgers.destroy({
        where: {
            id: req.params.id
        }
        }).then(function(result){
            res.json(result);
        }).catch(function(err){
        res.json(400, err);
        });
    });
    };
    // ====================================================