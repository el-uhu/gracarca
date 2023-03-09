<script>
	import Scrolly from "$components/helpers/Scrolly.svelte";
	import * as textdata from "$data/texts.json";
	import SvelteMarkdown from 'svelte-markdown';
	import {fade} from 'svelte/transition';
	let myText;
	let value;
	let key = 'Gräberfeld';
</script>

<!-- <section id="scrolly" transition:fade style="background-image: url({textdata.de[key].sections.at(value).img})" class="has-fixed-background"> -->
<section id="scrolly">
	
	<h1>{key}</h1>
	<blockquote>
		{textdata.de[key].blockquote}
	</blockquote>
	<cite>{textdata.de[key].cite}</cite>

	{#if textdata.de[key].sections.at(value).h2 != ""}
		<h2>{textdata.de[key].sections.at(value).h2}</h2>
	{/if}
	<img transition:fade src={textdata.de[key].sections.at(value).img} alt="" />
	<Scrolly bind:value>
		{#each textdata.de[key].sections as item, i}
			{@const active = value === i}
			<div class="step" class:active>
				{#if item.body != ""}
					<div class="step-content">
						<SvelteMarkdown source={item.body}/>
					</div>
				{/if}
			</div>
		{/each}
	</Scrolly>
</section>

<style>
	h2 {
		position: sticky;
		top: 1em;
	}

	img  {
		position: sticky;
		margin-top: 1em;
		top: 10em;
		z-index: -10;
		transition: all 00ms ease;
	}

	.spacer {
		height: 50vh;
	}

	.step {
		height: 85vh;
		display: flex;
		place-items: center;
		justify-content: center;
	}

	.step-content {
		background: var(--color-bg-cream-transparent);
		text-align: left;
		width: 100%;
		padding: .5rem 1rem;
		box-shadow: 1px 1px 10px rgba(0, 0, 0, .2);
		transition: background 500ms ease, color 500ms ease;
	}

	.step-content > p, em, b {
		vertical-align: middle !important;
	}

	.step.active .step-content {
		opacity: 1;
		transition: background 500ms ease, color 500ms ease;
	}

	.step p {
		padding: 1rem;
	}
</style>
