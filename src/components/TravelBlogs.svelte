<script>
	export let items = [];

	import Breadcrumbs from './Breadcrumbs.svelte';
	items.pop();

	items.push({ text: 'travelBlogs', href: 'travelBlogs' });
</script>

<div class="travelBlogs_home">
	<Breadcrumbs {items} />

	<h1>This is where view by travelBlogs</h1>
</div>

<style>
	travelBlogs_home {
		color: blue;
		font-size: large;
		scroll-snap-align: start;
	}
</style>