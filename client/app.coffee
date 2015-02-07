Meteor.subscribe('users');

Template.ApplicationLayout.helpers(
    title: -> Session.get('title');
);