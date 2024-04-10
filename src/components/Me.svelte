<script>
	export let compParam = {};

	import Breadcrumbs from './Breadcrumbs.svelte';

	let action = compParam.action;
	let items = compParam.items;

	// items.pop();
	console.log('me: ', compParam, action, items);

	// items.push({ text: 'Me', href: '#me' });
</script>

<div class="me_home">
	<Breadcrumbs {items} />

	<h1>This is where view by me</h1>
	<h2>{action}</h2>

	{#if action == 'view'}
		<h2>execute function for viewing all "me" entries</h2>
	{:else if action == 'manage'}
		<h2>execute function for viewing all "me" entries</h2>
	{:else}
		<h2>ERROR no action provided</h2>
	{/if}
</div>

<style>
	.me_home {
		color: blue;
		font-size: large;
	}
</style>
