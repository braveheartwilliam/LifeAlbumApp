<script>
	export let items = [];

	import Breadcrumbs from './Breadcrumbs.svelte';
	items.pop();

	items.push({ text: 'Video', href: '#video' });
</script>

<div class="video_home">
	<Breadcrumbs {items} />

	<h1>This is where view by video</h1>
</div>

<style>
	.video_home {
		color: blue;
		font-size: large;
		scroll-snap-align: start;
	}
</style>