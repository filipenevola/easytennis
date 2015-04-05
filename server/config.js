Meteor.startup(function () {
    ServiceConfiguration.configurations.upsert({
        service: FACEBOOK
    }, {
        $set: {
            appId: "797526476981636",
            secret: Meteor.settings.FACEBOOK_SECRET
        }
    });

    Accounts.loginServiceConfiguration.upsert({
        service: TWITTER
    }, {
        $set: {
            consumerKey: "HH2wFHqsVYpvqC92R6W04qPw2",
            secret: Meteor.settings.TWITTER_SECRET
        }
    });

    Accounts.loginServiceConfiguration.upsert({
        service: GOOGLE
    }, {
        $set: {
            clientId: Meteor.settings.GOOGLE_ID,
            secret: Meteor.settings.GOOGLE_SECRET,
            loginStyle: "popup"
        }
    });
});