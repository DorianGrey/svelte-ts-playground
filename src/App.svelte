<script lang="ts">
  import "./TailwindSetup.svelte";

  let message: string = "Learn Svelte with Typescript";

  const test = (param: string) => console.warn("tapped");
</script>

<style>
  :global(body) {
    margin: 0;
    font-family: Arial, Helvetica, sans-serif;
  }

  .App-header {
    background-color: #f9f6f6;
    color: #333;
    font-size: calc(10px + 2vmin);
  }
  .App-link {
    color: #ff3e00;
  }
  .App-logo {
    height: 40vmin;
    animation: App-logo-spin infinite 1.6s ease-in-out alternate;
  }
  @keyframes App-logo-spin {
    from {
      transform: scale(1);
    }
    to {
      transform: scale(1.06);
    }
  }
</style>

<div class="text-center">
  <header
    class="App-header min-h-screen flex flex-col justify-center items-center">
    <img src="/logo.svg" class="App-logo pointer-events-none mb-4" alt="logo" />
    <p>Edit <code>src/App.svelte</code> and save to reload.</p>
    <a
      class="App-link text-orange-500"
      href="https://svelte.dev"
      target="_blank"
      rel="noopener noreferrer">
      {message}
    </a>
  </header>
</div>
