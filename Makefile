JSHINT=./node_modules/jshint/bin/jshint
UGLIFY=./node_modules/uglify-js/bin/uglifyjs

.SILENT:

jshint:
	$(JSHINT) is.js

minify:
	$(UGLIFY) is.js --mangle --output is.min.js
	echo "minified!"
