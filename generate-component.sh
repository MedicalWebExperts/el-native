#!/bin/bash

echo "Creating component folder and files..."

mkdir src/$1
touch src/$1/$1.js
touch src/$1/$1.test.js
mkdir storybook/stories/$1
touch storybook/stories/$1/index.js

echo "Finished"