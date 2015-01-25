Template.Identification.helpers({
    profile: function () {
        return getUserProfile(Meteor.user());
    }
});