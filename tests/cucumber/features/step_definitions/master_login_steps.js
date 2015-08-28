(function () {
    'use strict';


    module.exports = function() {
        var helper = this;
        var url = require('url');

        this.Given(/^The master is signed out$/, function (callback) {
            // Write code here that turns the phrase above into concrete actions
            function logout(done) { Meteor.logout(done); }
            this.client.
                url(process.env.ROOT_URL).
                executeAsync(logout).
                call(callback);
        });

        this.Given(/^The master is on the landing page$/, function (callback) {
            // Write code here that turns the phrase above into concrete actions
            this.client.
                url(process.env.ROOT_URL).
                call(callback);
        });

        this.When(/^The master enters his details$/, function (callback) {
            // Write code here that turns the phrase above into concrete actions
            this.client.
                url(process.env.ROOT_URL).
                waitForExist('.at-pwd-form').
                waitForVisible('.at-pwd-form').
                setValue('input#at-field-email', 'velocity@debug.org').
                setValue('input#at-field-password', 'password').
                submitForm('#at-pwd-form').
                call(callback);
        });

        this.Then(/^The master should be logged in$/, function (callback) {
            // Write code here that turns the phrase above into concrete actions
            this.client.
                waitForExist('#long-term-plans').
                call(callback);
        });

        this.When(/^The master's details are incorrect$/, function (callback) {
            // Write code here that turns the phrase above into concrete actions
            this.client.
                url(process.env.ROOT_URL).
                waitForExist('.at-pwd-form').
                waitForVisible('.at-pwd-form').
                setValue('input#at-field-email', 'hacker@debug.org').
                setValue('input#at-field-password', 'password').
                submitForm('#at-pwd-form').
                call(callback);
        });

        this.Then(/^The master should see a user not found error$/, function (callback) {
            // Write code here that turns the phrase above into concrete actions
            this.client.
                waitForExist('.at-error').
                getText('.at-error').
                should.
                become('Login forbidden').
                and.
                notify(callback);
        });
    };
})();