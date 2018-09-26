const FollowToggle = require('./follow_toggle.js');
$( () => {
  $('button.follow-toggle').each((idx, el) => {
    const followToggle = new FollowToggle(el);
  });
});