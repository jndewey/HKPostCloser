Deals = new Mongo.Collection('deals');

// Deals.allow({
  // update: function(userId, deal) { return ownsDocument(userId, deal); },
  // remove: function(userId, deal) { return ownsDocument(userId, deal); },
// });

//Deals.deny({
  //update: function(userId, deal, fieldNames) {
    // may only edit the following two fields:
    //return (_.without(fieldNames, 'url', 'title').length > 0);
  //}
//});

Tasks = new Mongo.Collection('tasks');