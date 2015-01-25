Template.Picture.helpers({
    profile: function () {
        return getUserProfile(Meteor.user());
    }
});