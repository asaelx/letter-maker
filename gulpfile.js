var elixir      = require('laravel-elixir'),
    jade        = require('laravel-elixir-jade'),
    livereload  = require('laravel-elixir-livereload');

elixir.config.sourcemaps = false;

elixir(function(mix) {
    mix.sass([
        'master.sass'
    ], 'public/css/master.css');
});

elixir(function(mix) {
    mix.jade({
        search: '**/*.jade',
        src: '/assets/jade/'
    });
});

// elixir(function(mix) {
//     mix.scripts([
//         'magic.js'
//     ], 'public/js/all.js');
// });

elixir(function(mix) {
    mix.livereload();
});
