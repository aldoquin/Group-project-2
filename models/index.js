const User = require('./User');
const Developer = require('./Developer');
const Comment = require('./Comment')

User.hasMany(Comment, {
  foreignKey: 'user_id',
  onDelete: 'CASCADE',
});

Comment.belongsTo(User, {
  foreignKey: 'user_id',
});

Developer.hasMany(Comment, {
  foreignKey: 'Dev_id',
  onDelete: 'CASCADE',
});

Comment.belongsTo(Developer, {
  foreignKey: 'Dev_id',
});


module.exports = {User,Developer,Comment};
