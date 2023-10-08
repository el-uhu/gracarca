<script>
    import "$styles/app.css";
	import { setContext } from "svelte";
	import { browser } from "$app/environment";
	import Header from "$components/Header.svelte";
	import Meta from "$components/Meta.svelte";
	import Index from "$components/Index.svelte";
    import Footer from "$components/Footer.svelte";
    import GracarcaHero from "$components/gracarca/Gracarca.Hero.svelte";
	import GracarcaMapModel from "$components/gracarca/Gracarca.MapModel.svelte";
	import { degToRad } from 'three/src/math/MathUtils';
	import { each } from "svelte/internal";
	import Card from "$components/gracarca/Card.svelte";
	
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

	// GET LANGUAGE OG CURRENT PAGE
	let lang = $page.params.lang;

	// GETTING DATA FROM THE API
	// import onMount hook, which will make the function run when DOM is first rendered
	import { onMount } from "svelte";
	import { page } from "$app/stores";
	// define the api endpoint
	const endpoint = '/api/posts';
	// declare an object that holds the posts
	let posts = [];
	// fetch API data on mount
	onMount(async function () {
		const response = await fetch(endpoint);
		var data = await response.json();
		// filter entries based on lang variable
		posts = data.filter(function (el) {
    			return el.lang == lang;
			}
		);
	});
	

	
</script>

<Header {lang}/>

<GracarcaMapModel cameraSettings={cameraSettings["base"]}/>
<main id="content">
    <div id="gracarca">
        <section class="content-section">
			{#each posts as article}
				<!-- Use component $components/gracarca/Card.svelte -->
				<Card article={article}/>
			{/each}
        </section>
    </div>
</main>


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
