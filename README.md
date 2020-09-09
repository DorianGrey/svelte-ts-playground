# Svelte TS playground

Just a playground app tot figure out how good Svelte works in conjunction with TypeScript already...

# Known issues / problems / glitches

Note: The list below might not (yet) be exhaustive, it is mostly a list of already spotted aspects.

- HMR with `snowpack` does not always work properly in conjunction with the routing mechanism. As a result, some components may not be displayed properly. At the moment, it is not entirely clear why this occurs. Also, styles defined in the `svelte` components are not always re-applied properly in case they change.

- ESLint in `.svelte` files does not work in conjunction with TypeScript yet, since a preprocessor is required. See https://github.com/sveltejs/eslint-plugin-svelte3/pull/62<br>As such, `eslint-plugin-svelte3` will not be used for now.

- Testing does not work as usually expected atm. due to the way `tailwindcss` has to be imported to not get removed automatically. To get this working, it was required to mock the `TailwindSetup.svelte` file. Related issue for `svelte-jester`: https://github.com/mihar-22/svelte-jester/issues/20<br>
  Note that `jest-transform-svelte` did not work either with or without importing the `tailwindcss` setup.

- The type checker executed by the `svelte` plugin for VSCode raises a curious complaint about the code in `Route.svelte`:
  ```
  'render' implicitly has return type 'any' because it does not have a return type annotation and is referenced directly or indirectly in one of its return expressions.ts(7023)
  ```
  It is entirely unclear what causes this. Not exporting the `component` property removes this complaint, however this is absolutely not intended.

- Coverage reports are still a bit inaccurate. E.g. for the `Profile` component, the coverage report states:
  ```
  File             | % Stmts | % Branch | % Funcs | % Lines | Uncovered
  -----------------|---------|----------|---------|---------|----------
   src/profile     |     100 |    33.33 |     100 |     100 |
    Profile.svelte |     100 |    33.33 |     100 |     100 | 4
  ```
  However the component is definitely tested entirely.