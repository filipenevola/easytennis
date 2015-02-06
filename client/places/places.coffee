Meteor.subscribe('places')

Template.PlaceList.helpers(
   places: -> Places.find({}, {limit: 10, sort:{createDate: -1}})
);

Template.PlaceRow.helpers(
    my: -> this.user == Meteor.userId()
    courts: -> Courts.find({placeId: this._id}).fetch()
);