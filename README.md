# Svelte TS playground

Just a playground app tot figure out how good Svelte works in conjunction with TypeScript already...


# Known issues

- ESLint in `.svelte` files does not work in conjunction with TypeScript yet, since a preprocessor is required. See https://github.com/sveltejs/eslint-plugin-svelte3/pull/62<br>As such, `eslint-plugin-svelte3` will not be used for now.

- Testing does not work atm. due to the way `tailwindcss` has to be imported to not get removed automatically. Comment the line `import "./TailwindSetup.svelte";` in `App.svelte` to execute the unit test properly. Related issue for `svelte-jester`: https://github.com/mihar-22/svelte-jester/issues/20<br>
Note that `jest-transform-svelte` did not work either with or without importing the `tailwindcss` setup.