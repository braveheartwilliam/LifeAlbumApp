<script type:module>
	console.log('People');
	import { page } from '$app/stores';

	import People from '/src/components/People.svelte';

let serializedItems = $page.params.items;

let items = JSON.parse(decodeURIComponent(serializedItems));

	console.log('places/[items] - crumbs: ', items);
</script>

<h2>made it to /places/</h2>

<People {items} />
