<script>
	import Breadcrumbs from './Breadcrumbs.svelte';

	export let items;

	console.log('PlacesComp: ', items);

	let currActionType = items[items.length - 1].actionType;

	items.push({ text: 'Places', href: '#places', actionType: currActionType });
</script>

<div class="music_home">
	<Breadcrumbs {items} />

	<h1>This is where view by locations and places visited</h1>

	<h2>This is accessed to '{currActionType}`</h2>
	{#if currActionType == 'view'}
		<p>Display all of the locations/places visited (or will visit)</p>
		<!-- TODO WHEN ADDING CODE AS VISITED, PLAN TO VISIT, HOPE TO VISIT -->
	{:else if currActionType == 'add'}
		<p>Offer options for adding new places</p>
	{:else if currActionType == 'delete'}
		<p>Pick location(s)/place(s) to delete</p>
	{/if}
</div>

<style>
	.music_home {
		color: blue;
		font-size: large;
		scroll-snap-align: start;
	}
</style>
