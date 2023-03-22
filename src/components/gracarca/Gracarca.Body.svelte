<script>
    import SvelteMarkdown from 'svelte-markdown';

    export let content;
</script>

<div class="step-content">
    <SvelteMarkdown source={content}/>
</div>