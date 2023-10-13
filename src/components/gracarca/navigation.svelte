<script>
    export let language
	export let slug
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

<div class="nav">
	{#each posts as post}
		<div>
			<a href="{$page.url.origin}/{language}/{post.slug}" target="_self">
				<img src="/img/icons/{post.slug}.png" width="50px" class:active="{post.slug === slug}"/>
			</a>
		</div>
	{/each}
</div>

<style>
	.nav {
		display: flex;
		align-items: center;
 		justify-content: center;
	}

	img {
		filter: grayscale(100%);
	}

	img.active {
		filter: grayscale(0%)
	}
</style>