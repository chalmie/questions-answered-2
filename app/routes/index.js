import Ember from 'ember';

export default Ember.Route.extend({
  posts: Ember.inject.service('saved-posts'),

  model() {
    return Ember.RSVP.hash({
      posts: this.store.findAll('post')
    });
  },

  actions: {
    savePost(params) {
      var newPost = this.store.createRecord('post', params);
      newPost.save();
      this.transitionTo('index');
    },
    addToSavedPosts(post) {
      console.log(post);
      this.get('posts').add(post);
    },
  }
});
