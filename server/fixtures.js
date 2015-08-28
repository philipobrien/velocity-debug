var users = [
    {
        email: 'velocity@debug.org',
        roles: ['master']
    }
];

Meteor.startup(function () {
    _.each(users, function(user) {
        if (!Meteor.users.findOne({ "emails.address" : user.email })) {
            var id = Accounts.createUser({
                email: user.email,
                password: "password",
                roles: user.roles
            });

            Roles.addUsersToRoles(id, user.roles);
        }
    });
});