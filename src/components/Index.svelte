<script>
	import { getContext } from "svelte";
	import Meta from "$components/Meta.svelte";
	import Header from "$components/Header.svelte";
	import Gracarca from "$components/gracarca/Gracarca.svelte";
	import Footer from "$components/Footer.svelte";

	const copy = getContext("copy");
	const data = getContext("data");
</script>
<Gracarca />
<Footer />
