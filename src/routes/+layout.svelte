<script>
    import "$styles/app.css";
	import { setContext } from "svelte";
	import { browser } from "$app/environment";
	import Header from "$components/Header.svelte";
	import Meta from "$components/Meta.svelte";
	import Index from "$components/Index.svelte";
    import Footer from "$components/Footer.svelte";
    import GracarcaHero from "$components/gracarca/Gracarca.Hero.svelte";
	import GracarcaMapModel from "$components/gracarca/Gracarca.MapModel.svelte"
	import cameraSettings from "$data/camera"

	let locales = {
		"si": "sl_SI",
		"de": "de_AT",
		"en": "en_GB"
	};

	import lang from "$stores/lang"
	console.log(lang)
</script>

<Header lang={$lang}/>
<Meta />
<GracarcaMapModel cameraSettings={cameraSettings["base"]}/>
<main id="content">
	<slot />
</main>

<Footer />

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
