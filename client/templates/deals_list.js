Template.dealsList.helpers({
  deals: function() {
    return Deals.find({checked: false});
   }
});

