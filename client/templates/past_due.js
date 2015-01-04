Template.pastdue.helpers({

  pastdueitems: function() {
    var today = new Date;
    return Tasks.find({checked: {$ne: true}, task_due_date:{
      $lt: today.format("{yyyy}-{MM}-{dd}")}});

  }
});
