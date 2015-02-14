Meteor.subscribe('myPlaces')

Template.MyPlaceList.helpers(
   myPlaces: -> MyPlaces.find({user: Meteor.userId()})
);

Template.MyPlaceRow.helpers(
    courts: -> Courts.find({placeId: @place._id}).fetch()
);

Template.MyPlaceRow.events(
    'click .exit-btn': -> MyPlaces.remove(@_id)
);