module.exports = (sequelize, DataTypes) => {
    sequelize.define('User', {
        Email:{
            type: DataTypes.STRING,
            unique:true
        },
        Password: DataTypes.STRING
    })
}