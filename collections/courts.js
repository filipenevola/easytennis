Courts = new Mongo.Collection("court");

var Schemas = {};

Schemas.Court = new SimpleSchema({
    name: {
        type: String,
        label: "Name",
        max: 200,
        optional: false
    },
    user: {
        type: String,
        optional: false,
        autoValue: function () {
            return this.userId;
        }
    },
    placeId: {
        type: String,
        optional: false
    },
    createDate: {
        type: Date,
        optional: false,
        autoValue: function () {
            return new Date();
        }
    }
});

Courts.attachSchema(Schemas.Court);