# Svelte TS playground

Just a playground app to figure out how good Svelte works in conjunction with TypeScript already...

This branch uses [snowpack](https://github.com/pikapkg/snowpack/) and its [default plugin](https://github.com/pikapkg/snowpack/blob/master/plugins/plugin-svelte) for `svelte`.

# Tasks

* `start` start the development server.
* `build` creates a non-bundled production build.
* `build:bundled` creates a bundled production build.
* `test` starts unit tests via `jest` in watch mode.
* `test:ci` executes all unit tests in CI mode, i.e. without cache and including coverage.
* `e2e` executes all E2E tests. Note that this requires the development server to be available as well, i.e. use the `start` task in a different terminal tab.
* `lint` lints all `typescript` files in the project, including test files. Note that `.svelte` files are not linted for now, see the following section for details.
* `format` formats all source code (including tests) in the project. 
* `check` executes `svelte-check`.
* `serve` serves a production build for further preview.


# Known issues / problems / glitches

Note: The list below might not (yet) be exhaustive, it is mostly a list of already spotted aspects.

- HMR with `snowpack` does not always work properly in conjunction with the routing mechanism. As a result, some components may not be displayed properly. At the moment, it is not entirely clear why this occurs. Also, styles defined in the `svelte` components are not always re-applied properly in case they change.

- ESLint in `.svelte` files does not work in conjunction with TypeScript yet, since a preprocessor is required. See https://github.com/sveltejs/eslint-plugin-svelte3/pull/62<br>As such, `eslint-plugin-svelte3` will not be used for now.

- Testing does not work as usually expected atm. due to the way `tailwindcss` has to be imported to not get removed automatically. To get this working, it was required to mock the `TailwindSetup.svelte` file. Related issue for `svelte-jester`: https://github.com/mihar-22/svelte-jester/issues/20<br>
  Note that `jest-transform-svelte` did not work either with or without importing the `tailwindcss` setup.

- Coverage reports are still a bit inaccurate. E.g. for the `Profile` component, the coverage report states:
  ```
  File             | % Stmts | % Branch | % Funcs | % Lines | Uncovered
  -----------------|---------|----------|---------|---------|----------
   src/profile     |     100 |    33.33 |     100 |     100 |
    Profile.svelte |     100 |    33.33 |     100 |     100 | 4
  ```
  However the component is definitely tested entirely.