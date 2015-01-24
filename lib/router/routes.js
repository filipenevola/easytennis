ApplicationController = RouteController.extend({
    layoutTemplate: 'ApplicationLayout',

    onBeforeAction: function () {
        // do some login checks or other custom logic
        this.next();
    }
});

Router.configure({
    // this will be the default controller
    controller: 'ApplicationController',
    loadingTemplate: 'loading'
});

Router.plugin('dataNotFound', {notFoundTemplate: 'notFound'});

Router.route('/', function () {
    this.render('Home');
});

Router.route('/places', function () {
    this.render('Places');
});

Router.route('/players', function () {
    this.render('Players');
});