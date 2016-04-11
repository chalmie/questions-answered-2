import Ember from 'ember';

export default Ember.Route.extend({
  model(params) {
    return this.store.findRecord('post', params.post_id);
  },
  actions: {
    saveAnswer(params) {
      var newAnswer = this.store.createRecord('answer', params);
      var post = params.post;
      post.get('answers').addObject(newAnswer);
      newAnswer.save().then(function() {
        return post.save();
      });
      this.transitionTo('post', params.post);
    },
    deletePost(post) {
      var answer_deletions = post.get('answers').map(function(answer) {
        return answer.destroyRecord();
      });
      Ember.RSVP.all(answer_deletions).then(function() {
        return post.destroyRecord();
      });
      this.transitionTo('index');
  },
    updatePost(post, params) {
      Object.keys(params).forEach(function(key) {
        if(params[key]!==undefined) {
          post.set(key,params[key]);
        }
      });
      post.save();
    },
    setAsSolved(post, params) {
      Object.keys(params).forEach(function(key) {
        if(params[key]!==undefined) {
          post.set(key,params[key]);
        }
      });
      post.save();
    }
  }
});
