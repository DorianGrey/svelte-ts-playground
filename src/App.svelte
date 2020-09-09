<script lang="ts">
  import "./TailwindSetup.svelte";
  import router from "page";

  import Home from "./Home.svelte";
  import About from "./About.svelte";
  import NotFound from "./404.svelte";

  let page: typeof NotFound = Home;

  router("/", () => (page = Home));
  router("/about", () => (page = About));
  router("*", () => (page = NotFound));
  router.start();
</script>

<style>
  :root {
    --header-height: 64px;
  }

  :global(body) {
    margin: 0;
    font-family: Arial, Helvetica, sans-serif;
  }

  .header {
    height: var(--header-height);
    width: 100%;
  }

  .main {
    padding-top: var(--header-height);
  }

  .App-logo {
    height: calc(var(--header-height) / 2);
    animation: App-logo-spin infinite 1.6s ease-in-out alternate;
  }

  @keyframes App-logo-spin {
    from {
      transform: scale(1);
    }
    to {
      transform: scale(1.2);
    }
  }
</style>

<header class="header fixed bg-gray-800 flex items-center px-4">
  <img src="/logo.svg" class="App-logo pointer-events-none" alt="logo" />
  <nav>
    <a class="text-gray-100 px-4" href="/">Home</a>
    <a class="text-gray-100 px-4" href="/about">About</a>
    <a class="text-gray-100 px-4" href="/nowhere">Nowhere</a>
  </nav>
</header>
<main class="main min-h-screen flex flex-col justify-center items-center">
  <svelte:component this={page} />
</main>
