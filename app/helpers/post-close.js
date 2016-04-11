import Ember from 'ember';

export function postClose(params) {
  var post = params[0];

  if(post.get('solved') === true) {
    return Ember.String.htmlSafe('<span class="glyphicon glyphicon-ok-circle"></span>');
  }
}

export default Ember.Helper.helper(postClose);
