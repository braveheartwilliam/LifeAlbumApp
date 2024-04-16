<script>

	import Breadcrumbs from './Breadcrumbs.svelte';
	export let items;

	console.log('PlacesComp: ', items);

	let currActionType = items[items.length - 1].actionType;

	items.push({ text: 'People', href: '#people', actionType: currActionType });

</script>

<div class="people_home">
	<Breadcrumbs {items} />

	<h1>This is where view of people</h1>

	<h2>This is accessed to '{currActionType}`</h2>
	{#if currActionType == 'view'}
		<p>Display all of the people </p>
		<!-- TODO WHEN ADDING CODE AS VISITED, PLAN TO VISIT, HOPE TO VISIT -->
	{:else if currActionType == 'add'}
		<p>Offer options for adding new people</p>
	{:else if currActionType == 'delete'}
		<p>Pick people(s) to delete</p>
	{/if}
</div>

<style>
	.people_home {
		color: blue;
		font-size: large;
		scroll-snap-align: start;
	}
</style>
