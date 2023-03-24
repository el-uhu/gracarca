<script>
	import * as textdata from "$data/texts.json";

	import GracarcaBody from "$components/gracarca/Gracarca.Body.svelte";
    import GracarcaHero from "$components/gracarca/Gracarca.Hero.svelte";
	import GracarcaMapModel from "$components/gracarca/Gracarca.MapModel.svelte"
	import { degToRad } from 'three/src/math/MathUtils'

    let key = 'Gräberfeld';
    let imgPath = "/img/02/gracarca.png"

	let cameraSettings = {
		"base" : {
			"pos" : [-113.6, 1500, -37.7],
    		"rot" : [degToRad(-90), degToRad(0), degToRad(0)],
			"orbitcontrols" : true
		},
		"Gräberfeld"  : {
			"pos" : [-238, 755, 694],
    		"rot" : [degToRad(-51.61), degToRad(0.1), degToRad(0.12)],
			"orbitcontrols" : false
		},
		"Test" : {
			"pos" : [-288, 879, -493],
    		"rot" : [degToRad(-155), degToRad(0.3), degToRad(180)],
			"orbitcontrols" : false
		},
	}

</script>

<GracarcaMapModel cameraSettings={cameraSettings["base"]}/>

{#each Object.entries(textdata.de) as [title, content]}
	<section id={title} class="content-section">
		<h1> {title}</h1>
		{#if 'blockquote' in content}
			<blockquote>{content.blockquote}</blockquote>
			<cite>{content.cite}</cite>
		{/if}

		{#if content.body != ""}
			<GracarcaBody content={content.body} />
		{/if}
	</section>
	<GracarcaMapModel cameraSettings={cameraSettings[title]}/>

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
