import Ember from 'ember';

export default Ember.Component.extend({
    addNewPost: false,
    actions: {
      postFormShow() {
        this.set('addNewPost', true);
      },
      savePost() {
          var params = {
          author: this.get('author') ? this.get('author') : "",
          question: this.get('question') ? this.get('question') : "",
          detail: this.get('detail') ? this.get('detail') : "",
          };
          this.set('addNewPost', false);
          this.sendAction('savePost', params);
      }
    }
});
