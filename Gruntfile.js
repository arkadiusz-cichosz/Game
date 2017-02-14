module.exports = function(grunt) {
  grunt.initConfig({
    sass: {
      options: {
        sourceMap: true
      },
      dist: {
        files: {
          'css/style.css': 'sass/style.sass'
        }
      }
    },

    watch: {
      files: 'sass/*.sass',
      tasks: ['sass']
    },

    browserSync: {
        bsFiles: {
            src : ['index.html', 'css/*.css'] 
        },
        options: {
            server: {
                baseDir: './',
                watchTask: true
            }
        }
    }
  });

  // Load the plugins tasks 
  grunt.loadNpmTasks('grunt-sass');
  grunt.loadNpmTasks('grunt-contrib-watch');
  grunt.loadNpmTasks('grunt-browser-sync');
  // Default task(s).
  grunt.registerTask('default', ['sass', 'browserSync', 'watch']);
};