<script>
	export let title = "Gracarca";
	export let description = "";
	export let url = "";
	export let keywords = "";
	export let preloadFont = [];
</script>

<svelte:head>
	<title>{title}</title>
	<meta name="description" content={description} />
	<meta name="author" content="Biotop Wissenschaftskollektiv" />
	<meta name="news_keywords" content={keywords} />

	<meta property="og:title" content={title} />
	<meta property="og:site_name" content="Gracarca" />
	<meta property="og:url" content={url} />
	<meta property="og:description" content={description} />
	<meta property="og:type" content="article" />
	<meta property="og:locale" content="de_AT" />

	<meta name="robots" content="max-image-preview:large" />

	<link rel="canonical" href="{url}/" />

	{#each preloadFont as href}
		<link rel="preload" {href} as="font" type="font/woff2" crossorigin />
	{/each}
</svelte:head>
