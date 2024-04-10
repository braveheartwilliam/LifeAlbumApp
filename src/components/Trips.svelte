<script>
	export let items = [];

	import Breadcrumbs from './Breadcrumbs.svelte';
	items.pop();

	items.push({ text: 'Trips', href: '#trips' });
</script>

<div class="trips_home">
	<Breadcrumbs {items} />

	<h1>This is where view by trips and itineraries</h1>
</div>

<style>
	.trips_home {
		color: blue;
		font-size: large;
	}
</style>
