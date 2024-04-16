<script>
	import Breadcrumbs from './Breadcrumbs.svelte';

	export let items;

	console.log('VideoComp: ', items);

	let currActionType = items[items.length - 1].actionType;

	items.push({ text: 'Video', href: '#Video', actionType: currActionType });
</script>

<div class="video_home">
	<Breadcrumbs {items} />

	<h1>This is where view videos</h1>

	<h2>This is accessed to '{currActionType}`</h2>
	{#if currActionType == 'view'}
		<p>Display all of the videos</p>
		<!-- TODO WHEN ADDING CODE AS VISITED, PLAN TO VISIT, HOPE TO VISIT -->
	{:else if currActionType == 'add'}
		<p>Offer options for adding new videos</p>
	{:else if currActionType == 'delete'}
		<p>Pick videos(s) to delete</p>
	{/if}


</div>

<style>
	.video_home {
		color: blue;
		font-size: large;
		scroll-snap-align: start;
	}
</style>
