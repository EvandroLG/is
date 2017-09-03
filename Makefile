JSHINT=./node_modules/jshint/bin/jshint
UGLIFY=./node_modules/uglify-js/bin/uglifyjs
TEST=./node_modules/node-qunit-phantomjs/bin/node-qunit-phantomjs

.SILENT:

jshint:
	$(JSHINT) is.js
	echo "runned!"

minify:
	$(UGLIFY) is.js --mangle --output is.min.js
	echo "minified!"

unit_test:
	$(TEST) test/runner.html
