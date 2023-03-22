<script>
	import * as textdata from "$data/texts.json";

	import GracarcaBody from "$components/gracarca/Gracarca.Body.svelte";
    import GracarcaHero from "$components/gracarca/Gracarca.Hero.svelte";
	import GracarcaMapModel from "$components/gracarca/Gracarca.MapModel.svelte"

    let key = 'Gräberfeld';
    let imgPath = "/img/02/gracarca.png"

</script>

<!-- <GracarcaHero title="Gracarca"/> -->
<GracarcaMapModel />

{#each Object.entries(textdata.de) as [title, content]}
	<section id={title}>
		<h1> {title}</h1>
		{#if 'blockquote' in content}
			<blockquote>{content.blockquote}</blockquote>
			<cite>{content.cite}</cite>
		{/if}

		{#if content.body != ""}
			<GracarcaBody content={content.body} />
		{/if}
	</section>
{/each}


<style>
	#gracarca {
		max-width: 40rem;
		/* padding: 16px; */
		margin: 0 auto;
	}

	:global(#gracarca section) {
		margin: 32px auto;
		/* padding-top: 32px; */
	}

	:global(#gracarca h2 span) {
		background: var(--color-mark);
		padding: 0 8px;
	}
</style>
