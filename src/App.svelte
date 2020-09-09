<script lang="ts">
  import "./TailwindSetup.svelte";

  import { Home } from "./home";
  import About from "./About.svelte";
  import { NotFound, Route, Router } from "./routing";
  import { Profile } from "./profile";
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

<header class="header fixed bg-gray-800 flex items-center px-4">
  <img src="/logo.svg" class="App-logo pointer-events-none" alt="logo" />
  <nav>
    <a class="text-gray-100 px-4" href="/">Home</a>
    <a class="text-gray-100 px-4" href="/profile/42">Profile of "The Answer"</a>
    <a class="text-gray-100 px-4" href="/about?format=plain">About</a>
    <a class="text-gray-100 px-4" href="/nowhere">Nowhere</a>
  </nav>
</header>
<main class="main min-h-screen flex flex-col justify-center items-center">
  <Router>
    <Route path="/" component={Home} />
    <Route path="/profile/:id" component={Profile} />
    <Route path="/about" component={About} />
    <Route path="*" component={NotFound} />
  </Router>
</main>
