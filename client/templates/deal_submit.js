Template.dealSubmit.events({
  'submit form': function(e) {
    e.preventDefault();

    var deal = {
      client_number: $(e.target).find('[name=client_number]').val(),
      matter_number: $(e.target).find('[name=matter_number]').val(),
      title: $(e.target).find('[name=title]').val(),
      createdAt: new Date(),
      checked: false,
      duedate: $(e.target).find('[name=due_date]').val(),
      responsible_attorney_email: $(e.target).find('[name=responsible_attorney_email]').val().toLowerCase(),
      closing_agent_email: $(e.target).find('[name=closing_agent_email]').val().toLowerCase(),
      bank_closer_email: $(e.target).find('[name=bank_closer_email]').val().toLowerCase(),
      responsible_partner_email: $(e.target).find('[name=responsible_partner_email]').val().toLowerCase(),
      additional_attorney_email: $(e.target).find('[name=additional_attorney_email]').val().toLowerCase(),
      legal_assistant_email: $(e.target).find('[name=legal_assistant_email]').val().toLowerCase(),
      follow_up_count: 0,
      last_sent: 0,
      owner: Meteor.userId()
    };

    deal._id = Deals.insert(deal);
    Router.go('dealPage', deal);
  }
});