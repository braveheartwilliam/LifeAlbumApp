<script>
	export let items = [];

	import Breadcrumbs from './Breadcrumbs.svelte';

	items.push({ text: 'Places', href: '#places' });
</script>

<div class="places_home">
	<Breadcrumbs {items} />

	<h1>This is where view by locations and places visited</h1>
</div>

<style>
	.places_home {
		color: blue;
		font-size: large;
		width: 95vw;
		height: 100vh;
		scroll-snap-align: start;
	}
</style>
