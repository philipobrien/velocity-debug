if(Meteor.isClient) {
    Template.logout.events({
        'click .logout': function(event) {
            event.preventDefault();
            AccountsTemplates.logout();
        }
    });
}