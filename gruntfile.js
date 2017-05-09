module.exports = function confGrunt(gruntConf) {
  gruntConf.initConfig({

    clean: ['build/'],

    copy: {
      html: {
        //current working directory
        cwd: 'src/',  //get into the source
        //source
        src: ['*.html'],
        //destination
        dest: 'build/',
        //expands all the way back to root directory without needing to maunally do so
        expand: true
      },

      //changed this to make it DRY
      js: {
        cwd: 'src/',
        src: ['**/*.js'],
        dest: 'build/',
        expand: true
      },

      //fix!!!!!!
      jQuery: {
        files: [
          {
            cwd: 'node_modules/jquery/dist/',
            src: ['jquery.js'],
            dest: 'build/js/vendor/',
            expand: true
          }
        ]
      }
    },

    sass: {
      all: {
        files: {
          'build/style.css':'src/sass/main.scss'
        }
      }
    }

  });

  require('load-grunt-tasks')(gruntConf);

  gruntConf.registerTask('build', ['clean', 'copy', 'sass']);
};
