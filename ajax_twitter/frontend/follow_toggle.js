const APIUtil = require('./api_util.js');

class FollowToggle {
  constructor(el) {
    this.$el = $(el);
    this.userId = $(el).data('user-id');
    this.followState = $(el).data('initial-follow-state');
    $(el).click((e) => {
      this.handleClick(e);
    });
    this.render();
    
  }
  
  render () {  
    this.$el.prop('disabled', false);  
    if (this.followState === "unfollowed") {
      this.$el.text("Follow!");
    } else if(this.followState === "followed"){
      this.$el.text("Unfollow!");
    } else {
      this.$el.prop('disabled', true);
    }
  }
  
  handleClick(e) {
    e.preventDefault();
    if (this.followState === "unfollowed") {
      APIUtil.followUser(this.userId).then( () => {
        this.followState = "followed";
        this.render();
      });
      this.followState = "following";
    } else if (this.followState === "followed") {
      APIUtil.unfollowUser(this.userId).then( () => {
        this.followState = "unfollowed";
        this.render();
      });
      this.followState = "unfollowing";
    }
    this.render();
  }
}

module.exports = FollowToggle;