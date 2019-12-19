'use strict';
module.exports = (sequelize, DataTypes) => {
  const Image = sequelize.define('Image', {
    title: DataTypes.STRING,
    subtitle: DataTypes.STRING,
    url: DataTypes.STRING,
    likes_count: DataTypes.INTEGER
  }, {});
  Image.associate = function(models) {
    // associations can be defined here
  };
  return Image;
};