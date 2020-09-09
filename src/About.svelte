<script lang="ts">
  import { activeRoute } from "./routing/Router.svelte";
</script>

<h3>The about page</h3>
<code> {$activeRoute.queryParams} </code>
