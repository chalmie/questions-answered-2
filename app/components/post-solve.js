import Ember from 'ember';

export default Ember.Component.extend({
  actions: {
    setAsSolved(post) {
      if (confirm('Are you sure you want to close this question?')) {
          var params = {
          solved: true
          };
          this.sendAction('setAsSolved', post, params);
        }
      }
    }
});
