#!/bin/bash
if [ -z "$1" ]; then
	echo "You need to add the new module name."
	return
fi
MODULE=$1
if [ -d "src/${MODULE}" ]; then
	echo "The module ${MODULE} already exists."
	return
fi

echo "Creating component folder and files..."

# Make directories
mkdir src/${MODULE}
mkdir storybook/stories/${MODULE}

# Create files
sed "s/<module>/${MODULE}/g" "templates/component" > "src/${MODULE}/${MODULE}.js"
sed "s/<module>/${MODULE}/g" "templates/test" > "src/${MODULE}/${MODULE}.test.js"
sed "s/<module>/${MODULE}/g" "templates/story" > "storybook/stories/${MODULE}/index.js"

echo "Finished"