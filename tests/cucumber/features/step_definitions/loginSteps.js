(function () {

    'use strict';

    var assert = require('assert');

    module.exports = function () {

        var helper = this;

        this.Given(/^I am signed out$/, function (callback) {
            helper.world.browser.
                url(helper.world.cucumber.mirror.rootUrl + "logout").
                waitForExist('#login-form', 1000).
                waitForVisible('#login-form', 1000).
                call(callback);
        });

        this.Given(/^I am on the home page$/, function (callback) {
            helper.world.browser.
                url(helper.world.cucumber.mirror.rootUrl).
                call(callback);
        });

        this.When(/^I enter my authentication information$/, function (callback) {
            helper.world.browser.
                setValue('input#login-email', 'filipenevola@gmail.com').
                setValue('input#login-password', 'rightpass').
                submitForm('#login-form').
                call(callback);
        });

        this.When(/^I enter incorrect authentication information$/, function (callback) {
            helper.world.browser.
                setValue('input#login-email', 'filipenevola@gmail.com').
                setValue('input#login-password', 'wrong pass').
                submitForm('#login-form').
                call(callback);
        });

        this.Then(/^I should be logged in$/, function (callback) {
            helper.world.browser.
                waitForExist('.hello-user', 1000).
                waitForVisible('.hello-user').
                getText('.hello-user', function (err, email) {
                    if(err) {
                        callback.fail(err.message);
                    }
                    assert.equal(email, 'Olá filipenevola@gmail.com');
                }).
                call(callback);
        });

        this.Then(/^I should see a user not found error$/, function (callback) {
            callback.pending();
        });
    };
})();