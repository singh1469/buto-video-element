module.exports = function (grunt) {
    "use strict";

    grunt.initConfig({
        jshint: {
            files: ['Gruntfile.js']
        },
        watch: {
            options: {
                atBegin: true
            },
            files: ['<%= jshint.files %>','elements/buto-video-element.html','demo.html'],
            tasks: ['default']
        },
        copy:{
            webcomponentToDirBower:{
                src:"elements/buto-video-element.html",
                dest:"bower_components/buto-video-element/buto-video-element.html"
            },
            webcomponentToDirRoot:{
                src:"elements/buto-video-element.html",
                dest:"buto-video-element.html"
            }
        },
        'wct-test': {
            local: {
                options: {remote: false,browsers:['chrome','firefox']}
            },
            travis: {
                options: {remote: false, browsers: ['firefox']}
            }
        }
    });

    grunt.loadNpmTasks('grunt-contrib-jshint');
    grunt.loadNpmTasks('grunt-contrib-copy');
    grunt.loadNpmTasks('web-component-tester');
    grunt.registerTask('test', ['wct-test:local']);
    grunt.registerTask('test-travis', ['wct-test:travis']);
    grunt.registerTask('default', ['copy','wct-test:local','jshint']);
};
