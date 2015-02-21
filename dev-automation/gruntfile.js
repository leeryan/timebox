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
        vue: {
          src: 'bower_components/vue/dist/vue.js',
          dest: '../app/dev/js/vendor/vue.js',
        },
        moment: {
          src: 'bower_components/momentjs/moment.js',
          dest: '../app/dev/js/vendor/moment.js',
        },
        normalize: {
          src: 'bower_components/normalize-scss/_normalize.scss',
          dest: '../app/dev/styles/sass/vendor/_normalize.scss'
        }
    },

    watch: {

      markup: {
        files: '../**/*.html',
        options: {
          livereload: true
        }
      },

      scripts:{
        files: '../**/*.js',
        options: {
          livereload: true
        }
      },

      styles: {
        files: '../**/*.scss',
        tasks: ['compass'],
        options: {
          livereload: true
        }
      }

    },

    compass: {
      dev: {
        options: {
          sassDir: '../app/dev/styles/sass',
          cssDir: '../app/dev/styles/css'
        }
      }
    }

  });

  grunt.loadNpmTasks('grunt-contrib-connect');
  grunt.loadNpmTasks('grunt-concurrent');
  grunt.loadNpmTasks('grunt-nodemon');
  grunt.loadNpmTasks('grunt-contrib-watch');
  grunt.loadNpmTasks('grunt-contrib-copy');
  grunt.loadNpmTasks('grunt-contrib-compass');

  grunt.registerTask('default', ['connect', 'concurrent']);
  grunt.registerTask('bower', ['copy']);

};