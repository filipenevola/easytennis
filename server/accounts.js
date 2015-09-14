var inProduction = function () {
  return process.env.NODE_ENV === "production";
};

Meteor.startup(function () {
  ServiceConfiguration.configurations.upsert({
    service: FACEBOOK
  }, {
    $set: {
      appId: inProduction() ? process.env.FACEBOOK_ID : Meteor.settings.FACEBOOK_ID,
      secret: inProduction() ? process.env.FACEBOOK_SECRET : Meteor.settings.FACEBOOK_SECRET
    }
  });

  Accounts.loginServiceConfiguration.upsert({
    service: TWITTER
  }, {
    $set: {
      consumerKey: inProduction() ? process.env.TWITTER_ID : Meteor.settings.TWITTER_ID,
      secret: inProduction() ? process.env.TWITTER_SECRET : Meteor.settings.TWITTER_SECRET
    }
  });

  Accounts.loginServiceConfiguration.upsert({
    service: GOOGLE
  }, {
    $set: {
      clientId: inProduction() ? process.env.GOOGLE_ID : Meteor.settings.GOOGLE_ID,
      secret: inProduction() ? process.env.GOOGLE_SECRET : Meteor.settings.GOOGLE_SECRET,
      loginStyle: "popup"
    }
  });
});