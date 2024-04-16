<script type:module>
	console.log('Albums');
	import { page } from '$app/stores';

	import Albums from '/src/components/Albums.svelte';

	let serializedItems = $page.params.items;

	let items = JSON.parse(decodeURIComponent(serializedItems));

	console.log('albums/[items] - crumbs: ', items);
</script>

<h2>made it to /albums/</h2>

<Albums {items} />
