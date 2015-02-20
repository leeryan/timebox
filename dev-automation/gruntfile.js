module.exports = function(grunt) {

  grunt.initConfig({
    pkg: grunt.file.readJSON('package.json'),

    connect: {
      server: {
        options: {
          port: 8080,
          base: '../app/dev/',
          livereload: true
        }
      }
    },

    concurrent: {
      target: {
            tasks: ['nodemon', 'watch'],
            options: {
                logConcurrentOutput: true
            }
        }
    },

    nodemon: {
      dev: {
        script: 'gruntfile.js'
      }
    },

    copy: {
      bower: {
        src: 'bower_components/vue/dist/vue.js',
        dest: '../app/dev/js/vendor/vue.js',
      }
    },

    watch: {

      markup: {
        files: '../**/*.html',
        options: {
          livereload: true
        }
      },

      scripts: '../**/*.js',
      options: {
        livereload: true
      }

    }

  });

  grunt.loadNpmTasks('grunt-contrib-connect');
  grunt.loadNpmTasks('grunt-concurrent');
  grunt.loadNpmTasks('grunt-nodemon');
  grunt.loadNpmTasks('grunt-contrib-watch');
  grunt.loadNpmTasks('grunt-contrib-copy');

  grunt.registerTask('default', ['connect', 'concurrent']);
  grunt.registerTask('bower', ['copy:bower']);

};