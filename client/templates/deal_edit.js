Template.dealEdit.events({
  'submit form': function(e) {
    e.preventDefault();

    var currentDealId = this._id;

    var dealProperties = {
      client_number: $(e.target).find('[name=client_number]').val(),
      matter_number: $(e.target).find('[name=matter_number]').val(),     
      title: $(e.target).find('[name=title]').val(),
      duedate: $(e.target).find('[name=due_date]').val(),
      responsible_attorney_email: $(e.target).find('[name=responsible_attorney_email]').val(),
      closing_agent_email: $(e.target).find('[name=closing_agent_email]').val(),
      bank_closer_email: $(e.target).find('[name=bank_closer_email]').val(),
      responsible_partner_email: $(e.target).find('[name=responsible_partner_email]').val()
    }

    Deals.update(currentDealId, {$set: dealProperties}, function(error) {
      if (error) {
        // display the error to the user
        alert(error.reason);
      } else {
        Router.go('dealPage', {_id: currentDealId});
      }
    });
  },

  'click .delete': function(e) {
    e.preventDefault();

    if (confirm("Delete this deal?")) {
      var currentDealId = this._id;
      Deals.remove(currentDealId);
      Router.go('dealsList');
    }
  }
});