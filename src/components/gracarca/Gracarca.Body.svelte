<script>
    import SvelteMarkdown from 'svelte-markdown';
    import { base } from '$app/paths';

    export let content;
</script>

<div class="step-content">
    <SvelteMarkdown source={content}/>
</div>