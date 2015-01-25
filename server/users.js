
Accounts.onCreateUser(function(options, user){

    var userProperties = {
        profile: options.profile || {},
        isAdmin: false,
        email: null,
        name: null
    };
    user = _.extend(user, userProperties);

    // set email on profile
    if (options.email)
        user.profile.email = options.email;

    // set username on profile
    if (!user.profile.name)
        user.profile.name = user.username;

    // if this is not a dummy account, and is the first user ever, make them an admin
    user.isAdmin = (!user.profile.isDummy && Meteor.users.find({'profile.isDummy': {$ne: true}}).count() === 0) ? true : false;

    if (user.services) {
        var service = _.keys(user.services)[0];
        var email = user.services[service].email;

        console.log('service = ' + service);
        console.log('email = ' + email);
        if(email) {
            user.email = email;
        }

        if (service == 'github') {
            if (!user.profile)
                user.profile = {};
            if (!user.profile.name)
                user.profile.name = user.services[service].username;
        }

        if (!email)
            return user;

        // see if any existing user has this email address, otherwise create new
        var existingUser = Meteor.users.findOne({'emails.address': email});
        if (!existingUser)
            return user;

        // precaution, these will exist from accounts-password if used
        if (!existingUser.services)
            existingUser.services = { resume: { loginTokens: [] }};
        if (!existingUser.services.resume)
            existingUser.services.resume = { loginTokens: [] };

        // copy accross new service info
        existingUser.services[service] = user.services[service];
        existingUser.services.resume.loginTokens.push(
            user.services.resume.loginTokens[0]
        );

        // even worse hackery
        Meteor.users.remove({_id: existingUser._id}); // remove existing record
        return existingUser;                          // record is re-inserted
    }

    return user;
});
