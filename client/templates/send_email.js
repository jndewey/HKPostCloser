Template.sendEmail.helpers({
lateitems: function() {
   return Tasks.find({deal_id: this._id, checked: !true});
   // openitemstitle = Object.getOwnPropertyDescriptor(openitems, '_selectorID');
    //return openitemstitle;
    //message = "The following items are late:";
    //finalmessage = message + " " + openitemstitle;
    //return finalmessage;
  }
});

Template.sendEmail.events({
  'submit form': function(event) {
    var toperson = event.target.toperson.value;
    var ccperson = event.target.ccperson.value;
    var subject = event.target.subject.value;
    var bodyemail = event.target.bodyemail.value;

    var currentDealId = this._id;
    var new_date = new Date();

   Meteor.call('sendEmail', toperson, ccperson, "hkpostcloser@gmail.com", subject, bodyemail);
   Deals.update(currentDealId, {$inc: {follow_up_count: 1}});
   Deals.update(currentDealId, {$set: {last_sent: new_date}});
    Router.go('dealPage', {_id: this._id});
      return alert("Email Sent");
 }
    });