// This section sets up some basic app metadata,
// the entire section is optional.
App.info({
    id: 'br.com.quave.easytennis',
    name: 'Easy Tennis',
    description: 'Find players and play tennis easy',
    author: 'Filipe Névola',
    email: 'filipenevola@gmail.com',
    website: 'http://quave.com.br'
});

// Set up resources such as icons and launch screens.
App.icons({
    'android_ldpi': 'resources/icons/tennisracket.png',
    'android_mdpi': 'resources/icons/tennisracket.png',
    'android_hdpi': 'resources/icons/tennisracket.png',
    'android_xhdpi': 'resources/icons/tennisracket.png',

    'iphone': 'resources/icons/tennisracket.png',
    'iphone_2x': 'resources/icons/tennisracket.png',
    'iphone_3x': 'resources/icons/tennisracket.png',
    'ipad': 'resources/icons/tennisracket.png',
    'ipad_2x': 'resources/icons/tennisracket.png'
});

// Set PhoneGap/Cordova preferences
App.setPreference('BackgroundColor', '0xff0000ff');
App.setPreference('HideKeyboardFormAccessoryBar', true);