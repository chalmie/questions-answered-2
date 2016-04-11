import Ember from 'ember';

export default Ember.Component.extend({
  posts: Ember.inject.service('saved-posts'),
});
