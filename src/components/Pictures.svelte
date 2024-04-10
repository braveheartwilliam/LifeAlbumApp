<script>
	export let items = [];

	import Breadcrumbs from './Breadcrumbs.svelte';
	items.pop();

	items.push({ text: 'Pictures', href: '#pictures' });
</script>

<div class="Pictures_home">
	<Breadcrumbs {items} />

	<h1>This is where view by Pictures (sorted and filtered by date/time, place, people, Me)</h1>
</div>

<style>
	.Pictures_home {
		color: blue;
		font-size: large;
	}
</style>