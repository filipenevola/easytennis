Schemas = {}

@Courts = new Mongo.Collection("court");

Schemas.Court = new SimpleSchema

    name: 
        type: String
        label: "Name"
        max: 200
        optional: false
    
    user: 
        type: String
        optional: false
        autoValue: -> this.userId
    
    placeId: 
        type: String
        optional: false
    
    createDate: 
        type: Date
        optional: false
        autoValue: -> new Date()

Courts.attachSchema(Schemas.Court)