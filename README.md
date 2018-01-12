# EL NATIVE

[![Nevercode build status](https://app.nevercode.io/api/projects/00221536-8b56-4bfd-8d15-b6b7c876d4f6/workflows/26972073-bbf4-4458-8c20-a02c9a4bcba3/status_badge.svg?branch=develop)](https://app.nevercode.io/#/project/00221536-8b56-4bfd-8d15-b6b7c876d4f6/workflow/26972073-bbf4-4458-8c20-a02c9a4bcba3/latestBuild?branch=develop)

Just Another React Native Components Library.

### What is this repository for?

* The intended use for this repository is serving as a component library to develop react-native applications.
* Version 1.0.1

### Misc

- [Sketch Files](https://bitbucket.org/NewWaveWeb/el-native-sketch)
- [Jira Task](https://newwaveweb.atlassian.net/browse/MIW-894)

# Getting Started

To use this library in your project, just install it using npm and the repository url.

```bash
$ npm install git+https://bitbucket.org/NewWaveWeb/el-native.git#1.0.1 --save
```

That's it.

Then, import the components that you want to use:

```js
  import { Map } from 'el-native';
```

And that would do the trick.

# How to Contribute

## Clone this repository

``` bash
$ git clone git@bitbucket.org:NewWaveWeb/el-native.git
```

## Running the application for development

### 1. Install the dependencies

``` bash
$ cd el-native
$ npm install
```

### 2. Run the application

``` bash
$ react-native run-ios
```

or

``` bash
$ react-native run-android
```

### 3. Running Storybook

``` bash
$ npm run storybook
```

This command will show a storybook instance at: [http://localhost:7007](http://localhost:7007).

### 4. Running Tests

``` bash
$ npm test
```

To update the snapshots:
``` bash
$ npm test -- -u
```

To watch the test suite:
``` bash
$ npm run test:watch
```

### 5. Component Documentation
* To document the components we are using [react-docgen](https://github.com/reactjs/react-docgen). Follow the docs to document your components.

*Everytime a component is added, modified or deleted, run:
``` bash
$ npm run updateDocs
```

This command will update the `docs.json` file placed in the root of this repository. Add this file to commit and submit it with your changes.

### 6. Building the app to publish

``` bash
$ npm run prepublish
```

or:

``` bash
$ npm run build
```

## Structure of the Components Directory

### src/

All the components are placed under the src/ folder. If you want to create a new component use the following structure:

```
src/
├── index.js
├── MyComponent
│   ├── __snapshots__
│   ├── MyComponent.js
│   ├── styles.js
│   └── MyComponent.test.js
```

## Storybook

This project has configured a [storybook](https://storybook.js.org/). If you run the application as discribed in [step 1](#running-the-application-for-development), you will have an intereactive storybook and ready to use at: [http://localhost:7007](http://localhost:7007). You will be able to select the component from the stories list and preview it in the emulator.

If you want to add an story to the storybook, you can add it in the storybook/ folder at the root of this repository.

```js
  import React from 'react';
  import { storiesOf } from '@storybook/react-native';

  import { MyComponent } from '../../../src';

  storiesOf('MyComponent', module).add('default', () => <MyComponent />);
```

Checkout the storybook [documentation](https://storybook.js.org/basics/guide-react/) for more examples.

