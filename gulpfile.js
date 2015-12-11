var elixir      = require('laravel-elixir'),
    jade        = require('laravel-elixir-jade'),
    livereload  = require('laravel-elixir-livereload'),
    bwr = '../../../';

elixir.config.sourcemaps = false;

elixir(function(mix) {
    mix.sass([
        bwr + 'public/bower/medium-editor/dist/css/medium-editor.css',
        bwr + 'public/bower/medium-editor/dist/css/themes/default.css',
        'master.sass'
    ], 'public/css/master.css');
});

elixir(function(mix) {
    mix.jade({
        search: '**/*.jade',
        src: '/assets/jade/'
    });
});

elixir(function(mix) {
    mix.scripts([
        bwr + 'public/bower/jquery/dist/jquery.js',
        bwr + 'public/bower/medium-editor/dist/js/medium-editor.js',
        'magic.js'
    ], 'public/js/all.js');
});

elixir(function(mix) {
    mix.livereload();
});
