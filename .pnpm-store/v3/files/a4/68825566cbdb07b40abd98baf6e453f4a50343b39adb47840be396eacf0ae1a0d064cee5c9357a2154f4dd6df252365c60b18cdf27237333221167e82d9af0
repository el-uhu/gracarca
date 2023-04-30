<script>import Project from '../Project/Project.svelte';
import Sheet from '../Sheet/Sheet.svelte';
import Studio from '../Studio/Studio.svelte';
export let studio = true;
export let config = undefined;
</script>

{#if studio}
  <Studio />
{/if}

<Project {config}>
  <Sheet>
    <slot />
  </Sheet>
</Project>
