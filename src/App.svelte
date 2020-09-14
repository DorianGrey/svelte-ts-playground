<script lang="ts">
  import "./TailwindSetup.svelte";

  import { _, isLoading } from "svelte-i18n";

  import { Home } from "./home";
  import About from "./About.svelte";
  import { NotFound, Route, Router } from "./routing";
  import { Profile } from "./profile";
  import Redirect from "./routing/Redirect.svelte";
  import { setup } from "./i18n";

  setup();
</script>

<style>
  :root {
    --header-height: 64px;
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

{#if $isLoading}
  <div>Loading...</div>
{:else}
  <header class="header fixed bg-gray-800 flex items-center px-4">
    <img src="/logo.svg" class="App-logo pointer-events-none" alt="logo" />
    <nav>
      <a class="text-gray-100 px-4" href="/home">{$_('nav.home')}</a>
      <a
        class="text-gray-100 px-4"
        href="/profile/42">{$_('nav.profile-answer')}</a>
      <a
        class="text-gray-100 px-4"
        href="/about?format=plain">{$_('nav.about')}</a>
      <a class="text-gray-100 px-4" href="/nowhere">{$_('nav.nowhere')}</a>
    </nav>
  </header>
  <main class="main min-h-screen flex flex-col justify-center items-center">
    <Router>
      <Redirect path="/" to="/home" />
      <Route path="/home" component={Home} />
      <Route path="/profile/:id" component={Profile} />
      <Route path="/about" component={About} />
      <Route path="*" component={NotFound} />
    </Router>
  </main>
{/if}
