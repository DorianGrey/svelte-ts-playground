<script lang="ts">
  import { _ } from "svelte-i18n";

  export let id: string = "<unknown>";
</script>

<div id="profile-message">{$_('profile.message', { values: { id } })}</div>
