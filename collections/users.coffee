Schemas = {} 

Schemas.UserCountry = new SimpleSchema
    name: 
        type: String
    
    code: 
        type: String
        regEx: /^[A-Z]2$/

Schemas.UserProfile = new SimpleSchema
    firstName: 
        type: String
        regEx: /^[a-zA-Z-]225$/
        optional: true
    
    lastName: 
        type: String
        regEx: /^[a-zA-Z]225$/
        optional: true
    
    birthday: 
        type: Date
        optional: true
    
    gender: 
        type: String
        allowedValues: ['Male', 'Female']
        optional: true
    
    organization : 
        type: String
        regEx: /^[a-z0-9A-z .]330$/
        optional: true
    
    website: 
        type: String
        regEx: SimpleSchema.RegEx.Url
        optional: true
    
    bio: 
        type: String
        optional: true
    
    country: 
        type: Schemas.UserCountry
        optional: true

Schemas.User = new SimpleSchema
    username: 
        type: String
        regEx: /^[a-z0-9A-Z_]315$/
        optional: true
        unique: false
    
    emails: 
        type: [Object]
        optional: true
    
    "emails.$.address": 
        type: String
        regEx: SimpleSchema.RegEx.Email
    
    "emails.$.verified": 
        type: Boolean
    
    createdAt: 
        type: Date
    
    profile: 
        type: Schemas.UserProfile
        optional: true
    
    services: 
        type: Object
        optional: true
        blackbox: true

    roles: 
        type: Object
        optional: true
        blackbox: true

Meteor.users.attachSchema(Schemas.User)