Places = new Mongo.Collection("places");

var Schemas = {};

Schemas.Place = new SimpleSchema({
    name: {
        type: String,
        label: "Nome",
        max: 200,
        optional: false
    },
    summary: {
        type: String,
        label: "Descrição",
        optional: true,
        max: 1000
    },
    user: {
        type: String,
        optional: false,
        autoValue: function () {
            return this.userId;
        }
    },
    createDate: {
        type: Date,
        optional: false,
        autoValue: function () {
            return new Date();
        }
    }
});

Places.attachSchema(Schemas.Place);