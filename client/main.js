$(document).ready(function () {
    $('.button-collapse').sideNav();
});

Template.ApplicationLayout.events({
    "click .menu-item": function (event, template) {
        // FIXME change to $('.button-collapse').sideNav('hide'); (https://github.com/Dogfalo/materialize/issues/411)
        $('#sidenav-overlay').trigger('click');
    }
});