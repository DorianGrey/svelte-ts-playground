<script context="module" lang="ts">
  import { writable } from "svelte/store";
  import type { ActiveRouteInfo, RouteInfo, RedirectInfo } from "./types";

  export const activeRoute = writable<ActiveRouteInfo>(
    ({} as unknown) as ActiveRouteInfo
  );

  // Note: We're using records instead of arrays to automatically override duplicated routes
  // explicitly instead of doing that implicitly via Pagejs.
  const routes: Record<string, RouteInfo> = {};
  const redirects: Record<string, RedirectInfo> = {};

  export function register(route: RouteInfo) {
    routes[route.path] = route;
  }

  export function registerRedirect(redirect: RedirectInfo) {
    redirects[redirect.path] = redirect;
  }
</script>

<script lang="ts">
  import router from "page";
  import { onDestroy, onMount } from "svelte";

  const setupPage = () => {
    /*
      Note: For an unknown reason, it seems to be required to define the redirects
      BEFORE registering the routes. Dunno why, but otherwise, they are not applied.
    */
    for (const [path, redirect] of Object.entries(redirects)) {
      router.redirect(path, redirect.to);
    }

    for (const [path, route] of Object.entries(routes)) {
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
