<script lang="ts">
  import { registerRedirect } from "./Router.svelte";
  export let path: string = "/";
  export let to: string;

  registerRedirect({ path, to });
</script>
