<script lang="ts">
  import { register, activeRoute } from "./Router.svelte";
  export let path: string = "/";
  // TODO: Try to find a better type for this.
  export let component: any = null;

  // Define empty params object
  let params: Record<string, string> = {};

  register({ path, component });

  $: if ($activeRoute.path === path) {
    params = $activeRoute.params;
  }
</script>

{#if $activeRoute.path === path}
  {#if $activeRoute.component}
    <!-- $$restProps = all passed-in props -->
    <svelte:component this={component} {...$$restProps} {...params} />
  {:else}
    <slot {params} />
  {/if}
{/if}
