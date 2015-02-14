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

setTitle = function(title) {
    Session.set('title', title);
}

Router.plugin('dataNotFound', {notFoundTemplate: 'notFound'});

Router.route('/', function () {
    this.render('Home');
    setTitle(null);
}, {
    name: 'Home'
});

Router.route('/dashboard', function () {
    this.render('Dashboard');
    setTitle(null);
}, {
    name: 'Dashboard'
});

Router.route('/places', function () {
    this.render('Places');
    setTitle('Lugares');
}, {
    name: 'Places'
});

Router.route('/places/:_id/courts', function () {
    var item = Places.findOne({_id: this.params._id});
    this.render('Courts', {data: item});
}, {
    name: 'Courts'
});

Router.route('/players', function () {
    this.render('Players');
    setTitle('Jogadores');
}, {
    name: 'Players'
});

Router.route('/logout', function () {
    Meteor.logout();
    Router.go('Home');
}, {
    name: 'Logout'
});