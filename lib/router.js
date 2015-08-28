Router.plugin('ensureSignedIn', {
    except: ['atSignIn', 'atSignUp']
});

Router.configure({
    layoutTemplate: 'layout',
    notFoundTemplate: 'notFound',
    loadingTemplate: 'loading'
});

Router.route('/dashboard', {
    name: 'dashboard'
});