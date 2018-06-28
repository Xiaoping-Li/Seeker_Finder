const db = require('../database/dbConfiguration');

module.exports = {
  get: id => {
    let query = db('users');
    if (id) {
      query.where('id', id).first();
    }
    return query;
  },

  insert: user => {
    return db('users')
      .insert(user)
      .then(ids => ({ id: ids[0] }));
  },

  update: (id, user) => {
    return db('users')
      .where('id', id)
      .update(user);
  },

  remove: id => {
    return db('users')
      .where('id', id)
      .del();
  },
}