<script>
	import "$styles/app.css";
	import { setContext } from "svelte";
	import { get } from "svelte/store";
	import { browser } from "$app/environment";
	import Header from "$components/Header.svelte";
	import Meta from "$components/Meta.svelte";
	import copy from "$data/copy.json";
	import version from "$utils/version.js";
	import Navigation from "$components/gracarca/navigation.svelte"
	let locales = {
		"si": "sl_SI",
		"de": "de_AT",
		"en": "en_GB"
	};

	export let data;

	// GET LANGUAGE OG CURRENT PAGE
	import lang from "$stores/lang"
	import { page } from "$app/stores";
	let language = $page.params.lang;
	let slug = $page.params.slug;
	$lang = language;

	import camera from "$stores/camera"
	import cameras from "$data/cameras"
	camera.set(cameras[slug])
	
	console.log(get(camera))
	

	version();

	const preloadFont = [];

	const { title, description, url, keywords } = copy;
	console.log(copy)
	setContext("copy", copy);
	setContext("data", data.data);
</script>

	<Meta
		{title}
		{description}
		{url}
		{preloadFont}
		{keywords}
		lang={locales.lang}
	/>

	<div id="gracarca">
		<section class="content-section">
			<svelte:component this={data.content} />
			<Navigation {language}/>
		</section>
		
	</div>
	

