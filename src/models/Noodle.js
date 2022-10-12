module.exports = ( sequelize, DataTypes ) => {
    const Noodle = sequelize.define('Noodle', {
        title: DataTypes.STRING,
        thumbnail: DataTypes.STRING,
        pictures: DataTypes.STRING,
        content: DataTypes.TEXT,
        category: DataTypes.STRING,
        status: DataTypes.STRING,
    })
    return Noodle
}