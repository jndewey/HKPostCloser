process.env.MAIL_URL="smtp://hkpostcloser%40gmail.com:huskers4116@smtp.gmail.com:465/"; 

Meteor.methods({
  sendEmail: function (to, cc, from, subject, text) {
    check([to, cc, from, subject, text], [String]);

    // Let other method calls from the same client start running,
    // without waiting for the email sending to complete.
    //this.unblock();

    Email.send({
      to: to,
      cc: cc,
      from: from,
      subject: subject,
      text: text
    });
  }
});
