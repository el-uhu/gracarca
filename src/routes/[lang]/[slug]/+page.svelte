<script>
	import "$styles/app.css";
	import { setContext } from "svelte";
	import { browser } from "$app/environment";
	import Header from "$components/Header.svelte";
	import Meta from "$components/Meta.svelte";
	import Index from "$components/Index.svelte";
	import copy from "$data/copy.json";
	import version from "$utils/version.js";
	let locales = {
		si: "sl_SI",
		de: "de_AT",
		en: "en_GB"
	};

	export let data;
	let lang = data.meta.lang;
	console.log(lang);

	version();

	const preloadFont = [];

	const { title, description, url, keywords } = copy;
	setContext("copy", copy);
	setContext("data", data.data);
</script>

<Header {lang} />
<main id="conent">
	<Meta
		{title}
		{description}
		{url}
		{preloadFont}
		{keywords}
		lang={locales.lang}
	/>
	<Index Texts={data.content} />
</main>
