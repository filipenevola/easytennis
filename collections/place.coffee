Schemas = {}

@Places = new Mongo.Collection("places");

Schemas.Place = new SimpleSchema
    name:
        type: String
        label: "Nome"
        max: 200
        optional: false

    summary:
        type: String
        label: "Descrição"
        optional: true
        max: 1000

    user:
        type: String
        optional: false
        autoValue: -> this.userId

    location:
        type: String
        autoform:
            type: 'map'
            afFieldInput:
                geolocation: true
                searchBox: true
                autolocate: true
                zoom: 8

    'location.lat':
        type: String

    'location.lng':
        type: String

    createDate:
        type: Date,
        optional: false,
        autoValue: -> new Date()

Places.attachSchema(Schemas.Place)