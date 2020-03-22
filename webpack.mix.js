let mix = require('laravel-mix')

mix
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

if (mix.inProduction()) {
  mix.copy('index.prod.html', 'index.html')
} else {
  mix.copy('index.dev.html', 'index.html')
}
