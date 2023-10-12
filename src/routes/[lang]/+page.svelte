<script>
	import Header from "$components/Header.svelte";
	import Meta from "$components/Meta.svelte";
	import { each } from "svelte/internal";
	import Card from "$components/gracarca/Card.svelte";


	// GET LANGUAGE OG CURRENT PAGE
	import lang from "$stores/lang"

	let language = $page.params.lang;
	$lang = language;

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
    			return el.lang == language;
			}
		);
	});

	import TextEn from '$data/en/00.md'
	import TextSi from '$data/si/00.md'
	import TextDe from '$data/de/00.md'
 
</script>


<Meta
/>

<div id="gracarca">
	

	<section class="content-section">
		{#if language === "en"}
			<TextEn />
		{:else if language === "si"}
			<TextSi />
		{:else if language === "de"}
			<TextDe />
		{/if}
		{#each posts as article}
			<!-- Use component $components/gracarca/Card.svelte -->
			<Card article={article}/>
		{/each}
	</section>
</div>
