'use strict';

describe('master login', function() {
    it('master users should be able to login', function(done) {
        Meteor.loginWithPassword('velocity@debug.org', 'password', function(err) {
            expect(err).toBeUndefined();
            Meteor.logout(function() {
                done();
            });
        });
    });
});