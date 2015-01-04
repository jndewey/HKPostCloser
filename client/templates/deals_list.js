Template.dealsList.helpers({
  deals: function() {
  	var rawuseremailstring = Meteor.user().emails[0].address;
  	var useremailstring = rawuseremailstring.toLowerCase();
    return Deals.find({checked: false, $or : [{ responsible_attorney_email: useremailstring}, {responsible_partner_email: useremailstring}, {additional_attorney_email: useremailstring}, {legal_assistant_email: useremailstring}]});
   }
});

