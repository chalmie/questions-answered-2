import Ember from 'ember';

export default Ember.Component.extend({
  answers: Ember.inject.service('saved-posts'),
  sortBy: ['posting_date:desc'],
  sortedAnswers: Ember.computed.sort('post.answers', 'sortBy'),
});
