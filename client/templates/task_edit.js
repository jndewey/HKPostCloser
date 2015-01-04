 Template.taskeditPage.events({
 'submit form': function(e) {
    e.preventDefault();

    var currentTaskId = this._id;

    var thistask = Tasks.findOne(currentTaskId);

    dealid = thistask['deal_id'];

    var taskProperties = {
      title: $(e.target).find('[name=task_text]').val(),
      task_due_date: $(e.target).find('[name=task_due_date]').val(),
      task_notes: $(e.target).find('[name=task_notes]').val()
    };

    Tasks.update(currentTaskId, {$set: taskProperties}, function(error) {
      if (error) {
        // display the error to the user
        alert(error.reason);
      } else {
        Router.go('dealPage', {_id: dealid});
      }
    });
  }
});