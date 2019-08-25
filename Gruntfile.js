/*global module*/

module.exports = function(grunt) {

  grunt.initConfig({
      pkg: grunt.file.readJSON('package.json'),
      
      cssmin: {
          my_target :{
              files: [{
                  expand: true,
                  cwd: 'css/',
                  src: ['*.css', '!*.min.css'],
                  dest: 'css/',
                  ext: '.min.css'
              }]
          }
      },
    uglify: {
          my_target :{
              files: [{
                  expand: true,
                  cwd: 'js/',
                  src: ['*.js', '!*.min.js'],
                  dest: 'js/',
                  ext: '.min.js'
              }]
          }
      }

  });
    grunt.loadNpmTasks('grunt-contrib-cssmin');
    grunt.loadNpmTasks('grunt-contrib-uglify');
    
    grunt.registerTask('default', 'cssmin');

};