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
</script>


<Meta
/>

<div id="gracarca">
	<section class="content-section">
		{#each posts as article}
			<!-- Use component $components/gracarca/Card.svelte -->
			<Card article={article}/>
		{/each}
	</section>
</div>
