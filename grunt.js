/* global module:false */
module.exports = function(grunt) {

  grunt.initConfig({

    meta: {},

    less: {
      production: {
        options: {
          paths: ["styles"]
        },
        files: {
          "styles/colors.css": "styles/colors.less",
          "styles/main.css": "styles/main.less",
          "styles/hello.css": "styles/hello.less",
          "styles/passion.css": "styles/passion.less",
          "styles/trust.css": "styles/trust.less",
          "styles/universe.css": "styles/universe.less",
          "styles/contact.css": "styles/contact.less",
          "styles/work.css": "styles/work.less"
        }
      }
    },

    mincss: {
      compress: {
        files: {
          "styles/main.min.css": [
            "styles/typo.css",
            "styles/colors.css",
            "styles/main.css",
            "styles/hello.css",
            "styles/passion.css",
            "styles/trust.css",
            "styles/universe.css",
            "styles/contact.css",
            "styles/work.css"
          ]
        }
      }
    },

    reload: {
      port: 6001,
      proxy: {
        host: 'localhost',
        port: 8000
      }
    },

    watch: {
      files: ['styles/*.less', "*.html", "scripts/*.js"],
      tasks: 'less mincss reload'
    }
  });
  
  grunt.loadNpmTasks( 'grunt-contrib-less' );
  grunt.loadNpmTasks( 'grunt-contrib-mincss' );
  grunt.loadNpmTasks( 'grunt-reload');
  grunt.registerTask( 'default', 'server reload watch');
};
