require('laravel-mix')
    .setPublicPath('./')
    .disableSuccessNotifications()
    .autoload({
        jquery: ['$', 'jQuery', 'window.jQuery'],
        popper: ['Popper'],
    })
    .js('vue/main.js', 'assets/js/app.js')
    .extract([
        'axios',
        'collect.js',
        'vue',
        'vue-router',
        'vuex',
    ])
