//@Param userObjId - expects either user object or id
//
//Returns a basic user information object:
// ._id - the Meteor.users id
// .id  - service id
// .accessToken - service access token
// .serviceName - name of service eg. facebook, google etc.
// .email       - user email, not to be expected from twitter service
// .username    - profile username
// .screenName - twitters @username
// .identification - better name
// .picture
getUserProfile = function (userObjId) {
    if(!userObjId) {
        return;
    }
    var user = (userObjId._id) ? userObjId : Meteor.users.findOne({_id: userObjId});

    var result = {
        _id: (user._id) ? (user._id) : null,
        id: null,
        accessToken: null,
        serviceName: null,
        email: (user.emails && user.emails.length) ? user.emails[0].address : null,
        username: (user.username) ? user.username : null,
        screenName: null,
        identification: null,
        picture: null
    };
    result.username = (user.profile && user.profile.name) ? user.profile.name : result.username;
    result.identification = result.username;

    if (user.services) {
        for (var serviceName in user.services) {
            var serviceObject = user.services[serviceName];
            if (serviceObject.id) {
                result.id = serviceObject.id;
                result.email = (serviceObject.email) ? serviceObject.email : result.email;
                result.serviceName = serviceName;
                result.accessToken = (serviceObject.accessToken) ? serviceObject.accessToken : null;
                result.screenName = (serviceObject.screenName) ? serviceObject.screenName : null;

                var currentIdentification = null;
                var currentPicture = null;
                switch (serviceName) {
                    case FACEBOOK:
                        currentIdentification = serviceObject.first_name + " " + serviceObject.last_name;
                        currentPicture = 'http://graph.facebook.com/' + result.id + '/picture';
                        break;
                    case TWITTER:
                        currentIdentification = serviceObject.screenName;
                        currentPicture = serviceObject.profile_image_url;
                        break;
                    case GOOGLE:
                        currentIdentification = serviceObject.name;
                        currentPicture = serviceObject.picture;
                        break;
                }
                result.identification = (currentIdentification) ? currentIdentification : result.identification;
                result.picture = (currentPicture) ? currentPicture : result.picture;
            }
        }
    }
    if(!result.identification && result.email) {
        result.identification = result.email;
    }
    return result;
};

