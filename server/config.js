Meteor.startup(function () {
    ServiceConfiguration.configurations.upsert({
        service: FACEBOOK
    }, {
        $set: {
            appId: "797526476981636",
            secret: process.env.FACEBOOK_SECRET
        }
    });

    Accounts.loginServiceConfiguration.upsert({
        service: TWITTER
    }, {
        $set: {
            consumerKey: "HH2wFHqsVYpvqC92R6W04qPw2",
            secret: process.env.TWITTER_SECRET
        }
    });

    Accounts.loginServiceConfiguration.upsert({
        service: GOOGLE
    }, {
        $set: {
            clientId: "64769902608-8nq556s8itvqdttm3l1stnqvhtdt64l4.apps.googleusercontent.com",
            secret: process.env.GOOGLE_SECRET,
            loginStyle: "popup"
        }
    });
});