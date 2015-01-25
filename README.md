# easytennis
App to make play tennis with others an easy task

Stories:
https://trello.com/b/9Budr6t1/easy-tennis

Do you want to contribute? Contact me in twitter @FilipeNevola or make a pull request

To run this project and use Facebook login you need to create a config file like this (server/config.js):

    Meteor.startup(function () {
        ServiceConfiguration.configurations.upsert({
            service: "facebook"
        }, {
            $set: {
                appId: "xxx",
                secret: "xxx"
            }
        });

        Accounts.loginServiceConfiguration.upsert({
            service: "twitter"
        }, {
            $set: {
                consumerKey: "xxx",
                secret: "xxx"
            }
        });

        Accounts.loginServiceConfiguration.upsert({
            service: "google"
        }, {
            $set: {
                clientId: "xxx",
                secret: "xxx",
                loginStyle: "popup"
            }
        });
    });




