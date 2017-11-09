# EL NATIVE

Just Another React Native Components Library.

### What is this repository for?

* The intended use for this repository is serving as a component library to develop react-native applications.
* Version 1.0.1

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

### 5. Building the app to publish

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
│   └── __snapshots__
│       ├── index.js
│       ├── styles.js
│       └── MyComponent.test.js
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

