<script>import { globalProjects } from '../consts';
import { getProject } from '../theatre';
import { setContext } from 'svelte';
export let name = 'default';
export let config = undefined;
const project = globalProjects.get(name) ?? getProject(name, config);
globalProjects.set(name, project);
let isReady = false;
const init = async () => {
    await project.ready;
    isReady = true;
};
init();
setContext(`theatre-project`, project);
</script>

{#if isReady}
  <slot {project} />
{/if}
