<!-- todo look at TwicPics to store and retrieve images -- https://www.twicpics.com -->
<script type:module>
	console.log('Pictures');
	import { page } from '$app/stores';

	import AddPictures from '/src/components/pictures/AddPictures.svelte';
	import ViewPictures from '/src/components/pictures/ViewPictures.svelte';
		import DeletePictures from '/src/components/pictures/DeletePictures.svelte';


	let serializedItems = $page.params.items;
	console.log('pictures/[items] - serializedItems: ', serializedItems);

	let items = JSON.parse(decodeURIComponent(serializedItems));

	console.log('pictures/[items] - crumbs: ', items);
	const { actionType } = items[0];
	console.log('pictures/[items] - actionType: ', actionType);
</script>

<h2>made it to pages/pictures/</h2>

{#if actionType == 'add'}
	<AddPictures {items} />
{:else if actionType == 'view'}
	<ViewPictures {items} />
{:else if actionType == 'delete'}
	<DeletePictures {items} />
{/if}
