import DS from 'ember-data';

export default DS.Model.extend({
  author: DS.attr(),
  solution: DS.attr(),
  posting_date: DS.attr('date', {
    defaultValue() {return new Date(); }
  }),
  post: DS.belongsTo('post', {async: true })
});
