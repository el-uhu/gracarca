<script>
	import { base } from '$app/paths';
	export let Texts;
    import GracarcaHero from "$components/gracarca/Gracarca.Hero.svelte";
	import GracarcaMapModel from "$components/gracarca/Gracarca.MapModel.svelte"
	import { degToRad } from 'three/src/math/MathUtils'

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

<div id="gracarca">
	<section class="content-section">
		<Texts />
	</section>
</div>

<!-- <Carousel /> -->

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

	.embla {    
		overflow: hidden;  
	}

	.embla__container {    
		display: flex;  
	}  
	
	.embla__slide {    
		flex: 0 0 100%;
		min-width: 0;  
	}
</style>
