import DS from 'ember-data';

export default DS.Model.extend({
  author: DS.attr(),
  question: DS.attr(),
  detail: DS.attr(),
  solved: DS.attr('boolean', {defaultValue: false}),
  answers: DS.hasMany('answer', {async: true }),
  posting_date: DS.attr('date', {
    defaultValue() {return new Date(); }
  })
});
