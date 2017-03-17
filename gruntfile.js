module.exports = function confGrunt(gruntConf) {
  gruntConf.initConfig({

    clean: ['build/'],

    copy: {
      html: {
        cwd: 'src/',
        src: '*.html',
        dest: 'build/',
        expand: true
      }
    }

  });

  require('load-grunt-tasks')(gruntConf);

  gruntConf.registerTask('build', ['clean', 'copy']);
};
