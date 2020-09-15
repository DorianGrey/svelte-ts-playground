import svelte from "vite-plugin-svelte";

const config = {
  plugins: [svelte(require("./svelte.config"))],
  rollupDedupe: ["svelte"],
};

export default config;
