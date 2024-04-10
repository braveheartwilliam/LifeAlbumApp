<script type:module>
	console.log('Diaries');
	import { page } from '$app/stores';

	import Diaries from '/src/components/Diaries.svelte';

	let serializedItems = $page.params.items;

	let items = JSON.parse(decodeURIComponent(serializedItems));

	console.log('diaries/[items] - crumbs: ', items);
</script>

<h2>made it to /diaries/</h2>

<Diaries {items} />
