<script>
	export let items = [];

	import Breadcrumbs from './Breadcrumbs.svelte';
	items.pop();

	items.push({ text: 'People', href: '#people' });
</script>

<div class="people_home">
	<Breadcrumbs {items} />

	<h1>This is where view by People</h1>
</div>

<style>
	.people_home {
		color: blue;
		font-size: large;
		scroll-snap-align: start;
	}
</style>
