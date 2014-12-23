Template.dealItem.helpers({
	ownDeal: function() {
    return this.userId === Meteor.userId();
  }
});

Template.dealItem.events({
  "click .toggle-checked": function () {
    // Set the checked property to the opposite of its current value
    Deals.update(this._id, {$set: {checked: ! this.checked}});
  }
});