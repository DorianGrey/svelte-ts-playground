<script context="module" lang="ts">
  import { writable } from "svelte/store";
  import type { ActiveRouteInfo, RouteInfo } from "./types";

  export const activeRoute = writable<ActiveRouteInfo>(
    ({} as unknown) as ActiveRouteInfo
  );

  const routes: Record<string, RouteInfo> = {};

  export function register(route: RouteInfo) {
    routes[route.path] = route;
  }
</script>

<script lang="ts">
  import router from "page";
  import { onDestroy, onMount } from "svelte";

  const setupPage = () => {
    for (let [path, route] of Object.entries(routes)) {
      router(path, (ctx) => {
        // For the wildcard route, a parameter named "0" is provided via `ctx.params`.
        // It has to be filtered out to avoid complaints about an unexpected prop "0"
        // in the receiving 404 component.
        const { "0": arg, ...params } = ctx.params;
        if (arg) {
          console.info(
            `Route ${arg} does not exist, will forward to 404 handler.`
          );
        }

        $activeRoute = {
          ...route,
          params,
          queryParams: new URLSearchParams(ctx.querystring),
        };
      });
    }

    // start page.js
    router.start();
  };

  // wire up page.js when component mounts on the dom
  onMount(setupPage);

  // remove page.js click handlers when component is destroyed
  onDestroy(router.stop);
</script>

<slot />
