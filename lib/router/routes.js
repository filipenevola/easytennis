ApplicationController = RouteController.extend({
    layoutTemplate: 'ApplicationLayout'
});

Router.configure({
    // this will be the default controller
    controller: 'ApplicationController',
    loadingTemplate: 'loading',
    onBeforeAction: function () {
        if (!Meteor.userId()) {
            this.render('Home');
        } else {
            this.next();
        }
    }
});

Router.plugin('dataNotFound', {notFoundTemplate: 'notFound'});

Router.route('/', function () {
    this.render('Home');
}, {
    name: 'Home'
});

Router.route('/dashboard', function () {
    this.render('Dashboard');
}, {
    name: 'Dashboard'
});

Router.route('/places', function () {
    this.render('Places');
}, {
    name: 'Places'
});

Router.route('/players', function () {
    this.render('Players');
}, {
    name: 'Players'
});