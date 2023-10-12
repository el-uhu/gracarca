<script>
    import "$styles/app.css";
	import { setContext } from "svelte";
	import { browser } from "$app/environment";
	import Header from "$components/Header.svelte";
	import Meta from "$components/Meta.svelte";
    import Footer from "$components/Footer.svelte";
	import GracarcaMapModel from "$components/gracarca/Gracarca.MapModel.svelte"
	import PageTransition from '$components/transition.svelte'
	import cameraSettings from "$data/camera"


	let locales = {
		"si": "sl_SI",
		"de": "de_AT",
		"en": "en_GB"
	};
	export let data

	import lang from "$stores/lang"
	import cameraPosition from "$stores/camera"
</script>

<Header lang={$lang}/>

<Meta />
<GracarcaMapModel cameraSettings={cameraSettings[$cameraPosition]}/>

<main id="content">
	<PageTransition url={data.url}>
		<slot />
	</PageTransition>
</main>

<Footer />

<style>

	.transition {
		height: 100%;
	}

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
