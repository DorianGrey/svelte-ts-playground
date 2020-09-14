<script>
  import { _ } from "svelte-i18n";
</script>

<style>
  .App-link {
    color: #ff3e00;
  }
</style>

<!-- 
  TODO: ICU regularly supports formatting messages containing HTML in a special way, 
  try to figure out how this works here. 
-->
<p>{$_('home.edit')} <code>src/App.svelte</code> {$_('home.save')}</p>
<a
  class="App-link text-orange-500"
  href="https://svelte.dev"
  target="_blank"
  rel="noopener noreferrer">
  {$_('home.message')}
</a>
