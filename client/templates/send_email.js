Template.sendEmail.helpers({
lateitems: function() {
    var openitems = Tasks.find({deal_id: this._id});
    var message = "The following items are late:";
    var finalmessage = message + " " + openitems.length;
    return finalmessage;
  }
});

Template.sendEmail.events({
  'submit form': function(event) {
    var toperson = event.target.toperson.value;
    var ccperson = event.target.ccperson.value;
    var subject = event.target.subject.value;
    var bodyemail = event.target.bodyemail.value;

   Meteor.call('sendEmail', toperson, ccperson, "hkpostcloser@gmail.com", subject, bodyemail);
    return alert("Email Sent");
 }
    });