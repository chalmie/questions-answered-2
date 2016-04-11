import Ember from 'ember';

export default Ember.Component.extend({
  updatePostForm: false,
  actions: {
    updatePostForm() {
      this.set('updatePostForm', true);
    },
    updatePost(post) {
      var params = {
      author: this.get('author') ? this.get('author') : "",
      question: this.get('question') ? this.get('question') : "",
      detail: this.get('detail') ? this.get('detail') : "",
      };
      this.set('updatePostForm', false);
      this.sendAction('updatePost', post, params);
    }
  }
});
