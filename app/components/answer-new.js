import Ember from 'ember';

export default Ember.Component.extend({
    addNewAnswer: false,
    actions: {
      answerFormShow() {
        this.set('addNewAnswer', true);
    },
        saveAnswer() {
            var params = {
            author: this.get('author') ? this.get('author') : "",
            solution: this.get('solution') ? this.get('solution') : "",
            post: this.get('post') ? this.get('post') : ""
            };
            this.set('author', "");
            this.set('solution', "");
            this.set('addNewAnswer', false);
            this.sendAction('saveAnswer', params);
        }
    }
});
