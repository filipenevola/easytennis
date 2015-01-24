Template.Logout.events({
    'click #logout': function (e, t) {
        e.preventDefault();
        Meteor.logout();
    }
});