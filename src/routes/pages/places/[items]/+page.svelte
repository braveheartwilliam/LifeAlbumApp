<script type:module>
	console.log('Places');
	import { page } from '$app/stores';

	import Places from '/src/components/Places.svelte';

	let serializedItems = $page.params.items;

	let items = JSON.parse(decodeURIComponent(serializedItems));

	console.log('places/[items] - crumbs: ', items);


</script>

<h2>made it to /places/</h2>

<Places {items} />
