<script>
    import "$styles/app.css";
	import { setContext } from "svelte";
	import { browser } from "$app/environment";
	import { get } from "svelte/store";
	import Header from "$components/Header.svelte";
	import Meta from "$components/Meta.svelte";
    import Footer from "$components/Footer.svelte";
	import Sketchfab from "../components/Sketchfab.svelte";
	import PageTransition from '$components/transition.svelte'


	let locales = {
		"si": "sl_SI",
		"de": "de_AT",
		"en": "en_GB"
	};
	export let data

	import lang from "$stores/lang"
	import camera from "$stores/camera"


</script>

<Header lang={$lang}/>

<Meta />
<!-- <GracarcaMapModel cameraSettings={cameraSettings[$cameraPosition]}/> -->
<Sketchfab camera={get(camera)}/>


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
