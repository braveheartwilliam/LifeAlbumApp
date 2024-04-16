<script type:module>
	console.log('Events');
	import { page } from '$app/stores';

	import Events from '/src/components/Events.svelte';

	let serializedItems = $page.params.items;

	let items = JSON.parse(decodeURIComponent(serializedItems));

	console.log('events/[items] - crumbs: ', items);
</script>

<h2>made it to /events/</h2>

<Events {items} />
