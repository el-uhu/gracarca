<script>
	import { base } from '$app/paths'
</script>

<header>
	<div class="header-mark">
		<a href={base} aria-label="Gracarca">
			<p>
				<span class="header-text1"> Grabelsdorf</span>
				<img src={base + "/img/gracarca-logo.png"} alt="gracarca logo" class="header-logo" display="inline">
				<span class="header-text2"> Grabalja vas</span>

			</p>	
		</a>
	</div>
	<div>
		<ul>
			<li><a target="_self" href="{base}/en">en</a></li>
			<li><a target="_self" href="{base}/si">si</a></li>
			<li><a target="_self" href="{base}/de">de</a></li>
		</ul>
	</div>
</header>
