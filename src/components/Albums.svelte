<script>
	import Breadcrumbs from './Breadcrumbs.svelte';
	export let items;

	console.log('AlbumsComp: ', items);

	let currActionType = items[items.length - 1].actionType;

	items.push({ text: 'Albums', href: '#albums', actionType: currActionType });
</script>

<div class="albums_home">
	<Breadcrumbs {items} />

	<h1>This is where view albums</h1>

	<h2>This is accessed to '{currActionType}`</h2>
	{#if currActionType == 'view'}
		<p>Display all of the albums</p>
		<!-- TODO WHEN ADDING CODE AS VISITED, PLAN TO VISIT, HOPE TO VISIT -->
	{:else if currActionType == 'add'}
		<p>Offer options for adding new albums</p>
	{:else if currActionType == 'delete'}
		<p>Pick location(s)/albums(s) to delete</p>
	{/if}
</div>

<style>
	.albums_home {
		color: blue;
		font-size: large;
		width: 95vw;
		height: 100vh;
		scroll-snap-align: start;
	}
</style>