## eslint-config-openlayers

This package provides shareable [ESLint](http://eslint.org/) configurations for JavaScript projects that conform with the OpenLayers coding style.

### Installation

To make use of this config, install ESLint and this package as a development dependency of your project:

    npm install eslint eslint-config-openlayers --save-dev

Next, create a `eslint.config.js` file at the root of your project.  This file should export the openlayers configuration along with any overrides your project might include:

```js
// eslint.config.js
import openlayers from 'eslint-config-openlayers';

export default [
  ...openlayers
];
```

See the ESLint [configuration guide](http://eslint.org/docs/user-guide/configuring) for details on additional configuration options.  Any rules configured in your `eslint.config.js` file will override those provided by the `eslint-config-openlayers` package.

### Use

You should run the linter as part of (or before) your tests.  Assuming tests are run before any proposed changes are merged, this will ensure coding standards are maintained in your default branch.  Using [npm scripts](https://docs.npmjs.com/misc/scripts) is the preferred way to run the linter without requiring it to be a global dependency.  Assuming you want to lint all JavaScript files in your project, add the following entry to your `package.json`:

```json
{
  "scripts": {
    "pretest": "eslint src"
  }
}
```

With this `pretest` entry in your `package.json`, ESLint will run on all JavaScript files in the `src` directory of your project using your `.eslintrc` config when tests are run:

    npm test

See the ESLint [CLI guide](http://eslint.org/docs/user-guide/command-line-interface) for additional options when running ESLint.

In addition to running the linter when your tests are run, you should configure your editor to run the linter as well.  See the [ESLint integration page](http://eslint.org/docs/user-guide/integrations#editors) to find details on configuring your editor to warn you of ESLint errors.

If you are using VSCode, you'll need to configure it to use ESLint's flat config syntax:
```json
{
  "eslint.useFlatConfig": true
}
```

See the [examples directory](https://github.com/openlayers/eslint-config-openlayers/tree/main/examples) for more usage examples.

### Development

To add another configuration profile, add a new config script to the root of the repository directory (e.g. `new-config.js`).  This script should export an ESLint config object and should have an `extends: './index.js' property`.  People using this config will add `extends/new-config` to their own ESLint config.

You should add and example for your new profile and ensure that tests pass with any changes.

    npm test

After adding a new config profile or modifying an existing one, publish a new version of the package.  Adding a new "error" level rule constitutes a major release.  A new profile or non-breaking modification to an existing profile (e.g. a "warning" level rule) can be a minor release.

Publishing a new minor release would look like this:

    # commit and push any changes first
    npm version minor # this bumps the package.json version number and tags
    git push --tags origin main
    npm publish

![Build Status](https://github.com/openlayers/eslint-config-openlayers/workflows/Test/badge.svg)
