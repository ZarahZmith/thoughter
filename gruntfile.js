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

      js: {
        cwd: 'src/js/',
        src: ['*.js'],
        dest: 'build/js/',
        expand: true
      },

      jQuery: {
        files: [
          {
            cwd: 'src/js',
            src: ['*.js'],
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
