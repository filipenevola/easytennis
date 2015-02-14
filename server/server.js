Meteor.startup(function () {// server
    Meteor.publish('users', function () {
        return Meteor.users.find();
    });
    Meteor.publish('places', function () {
        return Places.find();
    });
    Meteor.publish('courts', function () {
        return Courts.find();
    });
    Meteor.publish('myPlaces', function () {
        return MyPlaces.find();
    });
});