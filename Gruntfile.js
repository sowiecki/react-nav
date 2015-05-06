module.exports = function(grunt) {
  var reactify = require('grunt-react').browserify;

  grunt.initConfig({
    babel: {
      options: {
        sourceMap: true
      },
      dist: {
        files: {
          "build/application.js": "src/application.jsx"
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
          "build/application.js": "src/application.jsx"
        }
      },
      prod: {
        files: {
            "build/application.js": "src/application.jsx"
        },
        options: {
          transform: [reactify],
          browserifyOptions: {
            extensions: ['.jsx']
          }
        }
      }
    },
    less: {
      development: {
         options: {
             paths: ["build"]
         },
         files: {
          "build/application.css": "src/less/*.less"
        }
     },
    },
    uglify: {
      my_target: {
        files: {
          "build/application.min.js": "build/application.js"
        }
      }
    },
    watch: {
      files: ["./src/**/*", "./src/*"],
      tasks: ["babel", "browserify"],
    },
  });

  grunt.loadNpmTasks("grunt-contrib-less");
  grunt.loadNpmTasks("grunt-contrib-watch");
  grunt.loadNpmTasks("grunt-browserify");
  grunt.loadNpmTasks("grunt-babel");
  grunt.loadNpmTasks("grunt-react");
  grunt.loadNpmTasks("grunt-contrib-uglify");

  grunt.event.on("watch", function(action, filepath, target) {
    grunt.log.writeln(target + ": " + filepath + " has " + action);
  });

  grunt.registerTask('default', ['babel']);
  grunt.registerTask('default', ['browserify:prod']);
  grunt.registerTask('dev', ['browserify:dev']);
  grunt.registerTask('prod', ['browserify:prod', 'uglify']);
};