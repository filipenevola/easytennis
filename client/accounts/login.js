var isLoginServiceAvailable = function (serviceName) {
    return ServiceConfiguration.configurations.find({service: serviceName}).count() > 0;
};

Template.Login.events({
    'click #login': function (e, t) {
        e.preventDefault();
        var email = t.find('#login-email').value;
        var password = t.find('#login-password').value;

        if (_.isBlank(email) || _.isBlank(password)) {
            toast('Ops! Please, fill all fields!', 4000);
            return false;
        }

        Meteor.loginWithPassword(email, password, function (err) {
            if (err) {
                toast('Ops! ' + err.reason, 4000);
            } else {
                Router.go('Dashboard');
                return true;
            }
        });

        return false;
    },

    'click #login-facebook': function (e, t) {
        e.preventDefault();
        Meteor.loginWithFacebook();
    },

    'click #login-twitter': function (e, t) {
        e.preventDefault();
        Meteor.loginWithTwitter();
    },

    'click #login-google': function (e, t) {
        e.preventDefault();
        Meteor.loginWithGoogle();
    }
});

Template.Login.helpers({
    isFacebookLoginAvailable: function () {
        return isLoginServiceAvailable(FACEBOOK);
    },
    isTwitterLoginAvailable: function () {
        return isLoginServiceAvailable(TWITTER);
    },
    isGoogleLoginAvailable: function () {
        return isLoginServiceAvailable(GOOGLE);
    }
});