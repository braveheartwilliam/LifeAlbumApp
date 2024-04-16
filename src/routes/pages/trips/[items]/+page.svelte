<script type:module>
	console.log('Trips');
	import { page } from '$app/stores';

	import Trips from '/src/components/Trips.svelte';

	let serializedItems = $page.params.items;

	let items = JSON.parse(decodeURIComponent(serializedItems));

	console.log('trips/[items] - crumbs: ', items);
</script>

<h2>made it to /trips/</h2>

<Trips {items} />
