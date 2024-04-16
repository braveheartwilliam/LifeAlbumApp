<script type:module>
	console.log('Videos');
	import { page } from '$app/stores';

	import Videos from '/src/components/Videos.svelte';

	let serializedItems = $page.params.items;

	let items = JSON.parse(decodeURIComponent(serializedItems));

	console.log('videos/[items] - crumbs: ', items);
</script>

<h2>made it to /places/</h2>

<Videos {items} />
