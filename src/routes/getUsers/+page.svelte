<script>
	/**@type {import('./$types' ).PageLoad} */
	import { page } from '$app/stores';
	

	// export let data;
	let result = $page.data.props.result;
	console.log('result: ', result);

</script>

<h1>Welcome to SvelteKit</h1>
<p>Visit <a href="https://kit.svelte.dev">kit.svelte.dev</a> to read the documentation</p>
<h2>Users</h2>
{#each result as item (item.id)}
	<p>{item.user}</p>
{/each}

