<script>
	import { base } from '$app/paths'
	import { page } from '$app/stores'
	import LangLinkHeader from './helpers/LangLinkHeader.svelte';

	export let lang;
	
	// Get base url
	let baseurl = $page.url.origin;

</script>

<header>
	<div class="header-mark">
		<a target="_self" href="{baseurl}/{lang}">
			<span class="header-text1"> Grabelsdorf</span>
			<img src={base + "/img/gracarca-logo.png"} alt="gracarca logo" class="header-logo" display="inline">
			<span class="header-text2"> Grabalja vas</span>
		</a>	
	</div>
	<div id="lang-selection">
		<ul>
			<LangLinkHeader thislang={lang} targetlang="en"/>
			<li>|</li>
			<LangLinkHeader thislang={lang} targetlang="si"/>
			<li>|</li>
			<LangLinkHeader thislang={lang} targetlang="de"/>
		</ul>
	</div>
</header>

<style>
	header{
		padding: 2em;
	}

	@media (max-width: 768px) {
		header {
			padding: 1em;
		}
	}

	#lang-selection {
		width: 230px;
		padding-top: 0rem;
		display: inline-flex;
		justify-content:right;
		align-items: center;
		margin-left: auto;
		margin-right: 2em;
	}
	#lang-selection ul {
		list-style: none;
	}
	#lang-selection ul li {
		display: inline;
	}
</style>
