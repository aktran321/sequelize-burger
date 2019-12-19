// creating and exporting our burger model with sequelize
// each burger has a name and boolean value
module.exports = function(sequelize, DataTypes) {
    var Burgers = sequelize.define("Burgers", {
        burger_name: {
            type: DataTypes.STRING,
            allowNull: false
        },
        devoured: {
            type: DataTypes.BOOLEAN,
            defaultValue: false,
            allowNull: false
        }
    });
    return Burgers;
}