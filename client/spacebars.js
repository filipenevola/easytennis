UI.registerHelper('timeFromNow', function(context, options) {
    if(context)
        return moment(context).fromNow();
});

var isEmpty = function(context) {
    return context == undefined
        || context == null
        || context == ""
        || (context instanceof Array && context.length == 0);
};

UI.registerHelper('isEmpty', function(context, options) {
    return isEmpty(context);
});

UI.registerHelper('isNotEmpty', function(context, options) {
    return !isEmpty(context);
});

UI.registerHelper('not', function(context, options) {
    return !context;
});