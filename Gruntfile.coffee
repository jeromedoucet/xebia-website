module.exports = (grunt) =>

  grunt.initConfig
    less:
      production:
        options:
          yuicompress: true
        files: [
          src: 'styles/*.less'
          dest: 'styles/main.min.css'
        ]
    watch:
      less:
        files: ['styles/*.less', "*.html", "scripts/*.js"]
        tasks: 'less'


  grunt.loadNpmTasks 'grunt-contrib-less'
  grunt.loadNpmTasks 'grunt-contrib-watch'
  grunt.registerTask 'default', 'watch'