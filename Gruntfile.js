module.exports = function(grunt) {
  var reactify = require('grunt-react').browserify;

  grunt.initConfig({
    babel: {
      options: {
        sourceMap: true
      },
      dist: {
        files: {
          "react-nav.js": "react-nav_es6.js"
        }
      }
    },
    browserify: {
      dev: {
        options: {
          transform: [ reactify ],
          browserifyOptions: {
              extensions: ['.jsx'],
              debug: true
          },
          watch: true,
          keepAlive: true
        },
        files: {
          "example.js": "example.jsx"
        }
      },
      prod: {
        files: {
            "react-nav.js": "react-nav.jsx"
        },
        options: {
          transform: [reactify],
          browserifyOptions: {
            extensions: ['.jsx']
          }
        }
      }
    }
  });

  grunt.loadNpmTasks("grunt-browserify");
  grunt.loadNpmTasks("grunt-babel");
  grunt.loadNpmTasks("grunt-react");

  grunt.event.on("watch", function(action, filepath, target) {
    grunt.log.writeln(target + ": " + filepath + " has " + action);
  });

  grunt.registerTask('default', ['babel']);
  grunt.registerTask('default', ['browserify:prod']);
  grunt.registerTask('dev', ['browserify:dev']);
  grunt.registerTask('prod', ['browserify:prod']);
};