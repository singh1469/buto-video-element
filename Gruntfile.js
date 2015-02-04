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
        }
    });

    grunt.loadNpmTasks('grunt-contrib-jshint');
    grunt.loadNpmTasks('grunt-contrib-copy');
    grunt.registerTask('default', ['jshint','copy']);

};