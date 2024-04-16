<script>
	import Breadcrumbs from './Breadcrumbs.svelte';
	export let items;

	console.log('PlacesComp: ', items);

	let currActionType = items[items.length - 1].actionType;

	items.push({ text: 'Places', href: '#places', actionType: currActionType });
</script>

<div class="trips_home">
	<Breadcrumbs {items} />

	<h2>This is accessed to '{currActionType}`</h2>
	{#if currActionType == 'view'}
		<p>Display all of the trips</p>
		<!-- TODO WHEN ADDING CODE AS VISITED, PLAN TO VISIT, HOPE TO VISIT -->
	{:else if currActionType == 'add'}
		<p>Offer options for adding new trips</p>
	{:else if currActionType == 'delete'}
		<p>Pick trips(s) to delete</p>
	{/if}
</div>

<style>
	.trips_home {
		color: blue;
		font-size: large;
	}
</style>
