Template.archived.helpers({
  deals: function() {
    return Deals.find({checked:true});
   }
});