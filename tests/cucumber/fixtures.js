(function () {

    'use strict';

    if (Meteor.isClient || !process.env.IS_MIRROR) {
        return;
    }
    Meteor.startup(function () {
        console.log('remove users');
        Meteor.users.remove({})

        console.log('add filipenevola@gmail.com user to db');
        Accounts.createUser({
            email: "filipenevola@gmail.com",
            password: "rightpass"
        });
    });

})();