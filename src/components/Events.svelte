<script>
	export let items = [];

	import Breadcrumbs from './Breadcrumbs.svelte';

	items.push({ text: 'Events', href: '#events' });
</script>

<div class="events_home">
	<Breadcrumbs {items} />

	<h1>This is where view by locations and places visited</h1>
</div>

<style>
	.events_home {
		color: blue;
		font-size: large;
		width: 95vw;
		height: 100vh;
		scroll-snap-align: start;
	}
</style>
