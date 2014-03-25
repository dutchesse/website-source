module.exports = function (grunt) {
  'use strict';

  grunt.initConfig({

    pkg: grunt.file.readJSON('./package.json'),
    site: grunt.file.readYAML('config.yml'),

    clean: {
      example: ['<%= site.dest %>/**/*'],
    },

    assemble: {
      options: { // build all individual pages
        flatten: true,
        partials: '<%= site.partials %>',
        layoutdir: '<%= site.layouts %>'
      },
      webpages: {
        options: { layout: 'page.hbs' },
        files: { '<%= site.root %>/': ['<%= site.content %>/pages/*.hbs']}
      },
      posts: { // build each of the blog entry pages
        options: { layout: 'post.hbs' },
        files: { '<%= site.blog %>/': ['<%= site.content %>/blog/*.md']}
      },
      blog: { // build the main blog listing page
        options: { layout: 'blog.hbs' },
        files: {
          '<%= site.blog %>/index.html': ['<%= site.content %>/blog/*.md']
        }
      }
    }

  });

  /* load every plugin in package.json */
  grunt.loadNpmTasks('grunt-contrib-clean');
  grunt.loadNpmTasks('assemble');

  /* grunt tasks */
  grunt.registerTask('default', ['clean', 'assemble']);

};