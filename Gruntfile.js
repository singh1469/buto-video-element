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
            test:{
                src:"elements/buto-video-element.html",
                dest:"bower_components/buto-video-element/buto-video-element.html"
            }
        }
    });

    grunt.loadNpmTasks('grunt-contrib-jshint');
    grunt.loadNpmTasks('grunt-contrib-copy');
    grunt.registerTask('default', ['jshint','copy']);

};