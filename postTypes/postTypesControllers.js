const db = require('../database/dbConfiguration');

module.exports = {
  get: id => {
    let query = db('postTypes');
    if (id) {
      query.where('id', id).first();
    }
    return query;
  },

  insert: postType => {
    return db('postTypes')
      .insert(postType)
      .then(ids => ({ id: ids[0] }));
  },

  update: (id, postType) => {
    return db('postTypes')
      .where('id', id)
      .update(postType);
  },

  remove: id => {
    return db('postTypes')
      .where('id', id)
      .del();
  },
}