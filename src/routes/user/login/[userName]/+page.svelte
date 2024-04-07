<!-- This page is for user login given a "userName" -->

// todo THIS PROBABLY NEEDS TO BE ADDED TO THE INITIAL PAGE (+LAYOUT.SVELTE) OR (+INDEX.SVELTE)  OR FIRST PAGE JUST HAS USER SELECT LOGIN OR CREATE NEW ACCOUNT
<script>
	import { browser } from '$app/environment';
	import { goto } from '$app/navigation';
	import { page } from '$app/stores';
	import { redirect } from '@sveltejs/kit';

	const goToMainMenu = function validUser() {
		sessionStorage.setItem('validLogin', 'true');
		console.log('login - user - [username]');

		// if (browser) {
		// 	console.log('login - browser');
		// } else {
		// 	console.log('login - server');
		// }
		const userPassword = sessionStorage.getItem('userPassword');
		sessionStorage.removeItem('userPassword');
		const userName = $page.params.userName;

		console.log('login - userName', userName);
		console.log('login - userPassword', userPassword);

		// const goToMainMenu = function validUser() {
		// 	sessionStorage.setItem('validLogin', 'true');
		// 	throw redirect(302, '/mainMenu');
		};
		goToMainMenu();

		if (!browser) {
			console.log('login - goToMainMenu - server');

			throw redirect(302, '/mainMenu');
		}

		if (browser) {
			console.log('login - goToMainMenu - browser');

			goto('/mainMenu');
		}

	// export async function load() {
	// 	// throw redirect(302, '/welcome');

	// 	// import { onMount } from 'svelte';
	// 	// onMount(() => {
	// 	// userPassword = sessionStorage.getItem('userPassword');
	// 	// });
	// 	console.log('login - user - [username');

	// 	// if (browser) {
	// 	// 	console.log('login - browser');
	// 	// } else {
	// 	// 	console.log('login - server');
	// 	// }
	// 	const userPassword = sessionStorage.getItem('userPassword');
	// 	sessionStorage.removeItem('userPassword');
	// 	const userName = $page.params.userName;

	// 	console.log('login - userName', userName);
	// 	console.log('login - userPassword', userPassword);

	// 	const goToMainMenu = function validUser() {
	// 		sessionStorage.setItem('validLogin', 'true');
	// 		throw redirect(302, '/mainMenu');
	// 	};
	// 	goToMainMenu();
	// }
</script>

<button on:click={goToMainMenu}>Simulated valid user</button>

// todo Create localStorage for userName and validLogin indicator --- may be part of setting up AUTH
