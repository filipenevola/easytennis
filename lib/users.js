
getEmail = function(user){
    console.log(user);
    if(user.profile && user.profile.email){
        return user.profile.email;
    }else{
        return null;
    }
};

getCurrentUserEmail = function(){
    return Meteor.user() ? getEmail(Meteor.user()) : '';
};