Template.Register.events({
    'click #create-account': function (e, t) {
        e.preventDefault();
        var email = t.find('#account-email').value;
        var password = t.find('#account-password').value;

        if(_.isBlank(email) || _.isBlank(password)) {
            toast('Ops! Please, fill all fields!', 4000);
            return false;
        }

        Accounts.createUser({email: email, password: password}, function (err) {
            if (err) {
                toast('Ops! ' + err.reason, 4000);
            } else {
                // Success. Account has been created and the user
                // has logged in successfully.
            }
        });

        return false;
    }
});