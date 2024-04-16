<script type:module>
	console.log('Music');
	import { page } from '$app/stores';

	import Music from '/src/components/Music.svelte';

let serializedItems = $page.params.items;

let items = JSON.parse(decodeURIComponent(serializedItems));

	console.log('music/[items] - crumbs: ', items);
</script>

<h2>made it to /music/</h2>

<Music {items} />
