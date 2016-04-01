module.exports = function(grunt) {

  require('load-grunt-tasks')(grunt); // npm install --save-dev load-grunt-tasks

  grunt.initConfig({
    shell: {
      snap: {
        command: 'ls'
      }, options: {
        stdin: false
      }
    }
  });

  grunt.registerTask('init', 'Prepare the project for development',
    [ 'shell:snap' ]);

};
