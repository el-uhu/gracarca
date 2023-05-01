<script>
	import { base } from '$app/paths'
	import { page } from '$app/stores'

	export let lang

</script>

<header>
	<div class="header-mark">
			<p>
				<span class="header-text1"> Grabelsdorf</span>
				<img src={base + "/img/gracarca-logo.png"} alt="gracarca logo" class="header-logo" display="inline">
				<span class="header-text2"> Grabalja vas</span>

			</p>	
	</div>
	<div id="lang-selection">
		<ul>
			<li><a target="_self" href="{$page.url.pathname.replace("/"+lang+"/", '/en/')}" class:active="{lang === "en"}">en</a></li>
			<li>|</li>
			<li><a target="_self" href="{$page.url.pathname.replace("/"+lang+"/", '/si/')}" class:active="{lang === "si"}">si</a></li>
			<li>|</li>
			<li><a target="_self" href="{$page.url.pathname.replace("/"+lang+"/", '/de/')}" class:active="{lang === "de"}">de</a></li>
		</ul>
	</div>
</header>

<style>
	#lang-selection {
		width: 230px;
		padding-top: 0.6em;
		display: inline-flex;
		justify-content:right;
		align-items: center;
		margin-left: auto;
		margin-right: 2em;
	}
	#lang-selection a {
		text-decoration: none;
		border-bottom: none;
		color: var(--color-t-blue);
	}
	#lang-selection a.active {
		font-weight: 900;
		color: var(--color-h-blue);
	}
	#lang-selection ul {
		list-style: none;
	}
	#lang-selection ul li {
		display: inline;
	}
</style>
