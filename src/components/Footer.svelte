<script>
	import wordmark from "$svg/wordmark.svg";

	const links = [
		{ name: "Biotop*", url: "https://biotop.co" }
	];

</script>

<footer>

	<section class="about">
		<div class="wordmark">
			{@html wordmark}
		</div>
		<p>
			<a href="https://pudding.cool">The Pudding</a>
			is a digital publication that explains ideas debated in culture with visual
			essays.
		</p>
	</section>

	<section class="links">
		<ul>
			{#each links as link}
				<li>
					<a href={link.url}>
						<span>{link.name.toUpperCase()}</span>
					</a>
				</li>
			{/each}
		</ul>
	</section>
</footer>

<style>
	footer {
		background-color: var(--color-fg);
		color: var(--color-bg);
		font-family: var(--sans);
		padding: 3em 1em;
		margin-top: 3em;
	}

	a,
	a:visited,
	a:hover {
		color: var(--color-bg);
	}

	.stories {
		margin: 0 auto;
		display: flex;
		flex-wrap: wrap;
		justify-content: space-between;
		max-width: 70em;
	}

	.story {
		display: block;
		width: 100%;
		border: none;
		margin-bottom: 3rem;
	}

	.story a {
		display: block;
		font-weight: 700;
		text-decoration: none;
		border: none;
	}

	.story span {
		display: block;
		margin-top: 1em;
		line-height: 1.2;
	}

	.wordmark {
		max-width: 10em;
		margin: 1em auto;
	}

	.about {
		margin: 3rem auto;
		margin-top: 0;
		text-align: center;
	}

	.links ul {
		display: flex;
		flex-wrap: wrap;
		justify-content: center;
	}

	.links li {
		display: flex;
		padding: 0.5em 1em;
	}

	.links a {
		display: flex;
		border: none;
		align-items: center;
		text-decoration: none;
	}

	.links span {
		margin-left: 0.5em;
	}

	@media only screen and (min-width: 30em) {
		.story {
			width: 50%;
			padding: 0 1em;
		}
	}

	@media only screen and (min-width: 50em) {
		.story {
			width: 25%;
			padding: 0 1em;
		}
	}
</style>
