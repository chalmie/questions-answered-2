import Ember from 'ember';

export default Ember.Component.extend({

  sortBy: ['posting_date:desc'],
  sortedAnswers: Ember.computed.sort('post.answers', 'sortBy'),
});
