AccountsTemplates.configure({
    confirmPassword: true,
    homeRoutePath: '/'
});

AccountsTemplates.configureRoute('signIn', {
    path: '/',
    template: 'atForm',
    layoutTemplate: 'account',
    redirect: '/dashboard'
});

AccountsTemplates.configureRoute('signUp', {
    path: '/signup',
    template: 'atForm',
    layoutTemplate: 'account',
    redirect: '/dashboard'
});


AccountsTemplates.configureRoute('ensureSignedIn', {
    template: 'atForm',
    layoutTemplate: 'account'
});


var myPostLogout = function(){
    //example redirect after logout
    Router.go('/');
};

AccountsTemplates.configure({
    onLogoutHook: myPostLogout
});