<script>
	import { base } from '$app/paths';

	export let lang

	const links = [
		{ name: "Biotop*", url: "https://biotop.co" },
		{ name: "Novetus", url: "https://www.novetus.at/"}
	];

	const items = {
		"en" : [
			"Scientific Lead: Martin Fera",
			"Design: Wolfgang Schütz, Lukas Hutter",
			"Translation: Sonja Kert-Wakounig",
			"In cooperation with:"
				],
		"si" : [
			"Znanstveni vodja: Martin Fera",
			"Oblikovanje: Wolfgang Schütz, Lukas Hutter",
			"Prevodi: Sonja Kert-Wakounig",
			"V sodelovanju z:"
		],
		"de" : [
			"Wissenschaftliche Leitung: Martin Fera",
			"Gestaltung: Wolfgang Schütz, Lukas Hutter",
			"Übersetzung: Sonja Kert-Wakounig",
			"In Zusammenarbeit mit:"

		]
	}

</script>

<footer>

	<section class="about">
		<div class="header-mark about">
			<a href={base} aria-label="Gracarca">
				<p>
					<span class="header-text1"> Grabelsdorf</span>
					<img src={base + "/img/gracarca-logo.png"} alt="gracarca logo" class="header-logo" display="inline">
					<span class="header-text2"> Grabalja vas</span>
				</p>	
			</a>
		</div>
	</section>

	<section class="links about">
		{#each items[lang] as item}
			<p>{item}</p>
		{/each}

		<ul>
			{#each links as link}
				<li>
					<a href={link.url}>
						<span>
							<b>
								{link.name.toUpperCase()}
							</b>
						</span>
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
</style>
