Package.describe({
    name: 'izzilab:shelljs',
    version: '0.0.3',
    // Brief, one-line summary of the package.
    summary: 'Portable Unix shell commands for Meteor',
    // URL to the Git repository containing the source code for this package.
    git: 'https://github.com/mrphu3074/meteor-shelljs.git',
    // By default, Meteor will default to using README.md for documentation.
    // To avoid submitting documentation, set this field to null.
    documentation: 'README.md'
});

Npm.depends({
    'shelljs': '0.5.3'
});

Package.onUse(function (api) {
    api.versionsFrom('0.9.0');
    api.addFiles('shelljs.js', 'server');
    api.export('shell', 'server');
});

Package.onTest(function (api) {
    api.use('tinytest');
    api.use('izzilab:shelljs', 'server');
    api.addFiles('shelljs-tests.js', 'server');
});
