Template.dealPage.helpers({

tasks: function () {
    if (Session.get("hideCompleted")) {
      // If hide completed is checked, filter tasks
      return Tasks.find({deal_id: this._id, checked: {$ne: true}});
    } else {
      // Otherwise, return all of the tasks
      return Tasks.find({deal_id: this._id});
    }
  },
  hideCompleted: function () {
    return Session.get("hideCompleted");
  },
  dealDate: function () {
    var dateobject = Deals.find(this._id).duedate;
    return dateobject.duedate.format("{yyyy}-{MM}-{dd}");
  }
});

Template.dealPage.events({
  'submit form': function(e) {
    e.preventDefault();

    Tasks.insert({
      deal_id: this._id,
      title: $(e.target).find('[name=task_text]').val(),
      task_due_date: $(e.target).find('[name=task_due_date]').val(),
      task_notes: $(e.target).find('[name=task_notes]').val(),
      createdAt: new Date(),
      checked: false
    });
    event.target.task_text.value = "";
},
  "change .hide-completed input": function(event) {
    Session.set("hideCompleted", event.target.checked);
  }
});

