Schemas = {}

@MyPlaces = new Mongo.Collection("myPlaces");

Schemas.MyPlace = new SimpleSchema

    place:
        type: Schemas.Place
        optional: false

    user:
        type: String
        optional: false
        autoValue: -> this.userId

    createDate:
        type: Date,
        optional: false,
        autoValue: -> new Date()

@MyPlaces.attachSchema(Schemas.MyPlace)