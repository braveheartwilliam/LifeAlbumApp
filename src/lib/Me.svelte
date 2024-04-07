<script>
	export let items = [];

	import Breadcrumbs from './Breadcrumbs.svelte';
	items.pop();

	items.push({ text: 'Me', href: '#me' });
</script>

<div class="me_home">
	<Breadcrumbs {items} />

	<h1>This is where view by me</h1>
</div>

<style>
	.me_home {
		color: blue;
		font-size: large;
	}
</style>