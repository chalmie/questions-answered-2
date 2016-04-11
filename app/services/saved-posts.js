import Ember from 'ember';

export default Ember.Service.extend({
  posts: [],

  add(answer) {
    this.get('posts').pushObject(answer);
  }
});
