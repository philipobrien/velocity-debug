(function () {
    'use strict';


    module.exports = function() {
        var helper = this;
        var url = require('url');

        this.Given(/^The master is signed in$/, function (callback) {
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

        this.When(/^The master navigates to "([^"]*)"$/, function (arg1, callback) {
            // Write code here that turns the phrase above into concrete actions
            this.client.
                waitForExist('#long-term-plans').
                call(callback);
        });

        this.Then(/^The master should see the heading Long Term Plans$/, function (callback) {
            // Write code here that turns the phrase above into concrete actions
            this.client.
                waitForExist('#long-term-plans').
                waitForVisible('h2.test').
                getText('h2.test').should.become("Long Term Plans").and.notify(callback);
        });
    };
})();