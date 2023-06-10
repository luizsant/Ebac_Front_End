module.exports = function(grunt) {
    grunt.initConfig({
        pkg: grunt.file.readJSON('package.json'),

        less: {
            development: {
                options: {
                    compress: true,
                    yuicompress: true,
                    optimization: 2
                },
                files: {
                    "main.css": "main.less"
                }
            }
        },

        sass: {
            development: {
                options: {
                    style: 'compressed'
                },
                files: {
                    "main1.css": "main1.scss"
                }
            }
        },

        uglify: {
            options: {
                mangle: false
            },
            my_target: {
                files: {
                    'output.min.js': ['src/input1.js']
                }
            }
        },

        concurrent: {
            target: ['less', 'sass', 'uglify']
        }
    });

    grunt.loadNpmTasks('grunt-contrib-less');
    grunt.loadNpmTasks('grunt-contrib-sass');
    grunt.loadNpmTasks('grunt-contrib-uglify');
    grunt.loadNpmTasks('grunt-concurrent');

    grunt.registerTask('default', ['concurrent:target']);
};
