Template.dealPage.helpers({
 tasks: function() {
    return Tasks.find({deal_id: this._id});
   }
});

Template.dealPage.events({
  'submit form': function(e) {
    e.preventDefault();

    Tasks.insert({
      deal_id: this._id,
      title: $(e.target).find('[name=task_text]').val(),
      createdAt: new Date()
    });

    
}
});

