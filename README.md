# README #

To use this repo as a local library (prior to npm publish, and while in development), follow this instructions:

FYI: The optimal way to do this would be using npm's link, but we can't use it here due to react-native doesn't support it (watchman specifically avoids symlinks in node_modules). This would have allow us to update the library and see those changes in the project. As we are not using this alternative is important to erase and re-install the library in order to get the updates. :(

1.   In the root of the project you want to include this library:

```javascript
npm install ./path/to/this/library
```

That's it.

2.   For consuming modules (components) from the library:

```javascript
import { TheComponentIWant } from 'elnative';
```

And that would do the trick.

** NOTE: This is intended for development user only. Ideally when this library is finished, should be publish to npm**

### What is this repository for? ###

* The intended use for this repository is serving as a component library to develop react-native applications.
* Version 1.0.0
* [Learn Markdown](https://bitbucket.org/tutorials/markdowndemo)

### How do I get set up? ###

* Summary of set up
* Configuration
* Dependencies
* Database configuration
* How to run tests
* Deployment instructions

### Contribution guidelines ###

* Writing tests
* Code review
* Other guidelines

### Who do I talk to? ###

* Repo owner or admin
* Other community or team contact
