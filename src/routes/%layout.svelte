<script>
	import { redirect } from '@sveltejs/kit';
	import { goto } from '$app/navigation';
	import { browser } from '$app/environment';
	import { base } from '$app/paths';
	export const ssr = false;

	console.log('layout load 0');

	export async function load() {
		// throw redirect(302, '/welcome');
		console.log('layout load 2');
		// import { onMount } from 'svelte';
		// onMount(() => {
		// 	userPassword = sessionStorage.getItem('userPassword');
		// });

		// redirect(302, '/welcome');
	}

	console.log('layout load 1');

	if (!browser) {
		console.log('Executing in server  in routes');
		// goto('user/login/{userName}');
		redirect(302, '/welcome');
	} else {
		console.log('Executing in browser in routes');
		goto('/welcome');
	}

	// export async function load() {
	// 	// throw redirect(302, '/welcome');
	// 	console.log('layout load 2');
	// 	// import { onMount } from 'svelte';
	// 	// onMount(() => {
	// 	// 	userPassword = sessionStorage.getItem('userPassword');
	// 	// });

	// 	// redirect(302, '/welcome');
	// }
</script>

<nav>
	<!-- <a href="/">Home</a> -->

	<!-- <a href="/welcome">About</a> -->
	<!-- <a href="/settings">Settings</a> -->
</nav>

<slot />
