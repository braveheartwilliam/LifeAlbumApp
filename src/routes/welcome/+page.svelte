<script>
	import { goto } from '$app/navigation';
	import { redirect } from '@sveltejs/kit';
	import { browser } from '$app/environment';

	let userName;
	// ******************************  TEMPORARY PENDING IMPLEMENTING AUTHENTICATION  *******
	let userPassword;
	// ******************************  TEMPORARY PENDING IMPLEMENTING AUTHENTICATION  *******

	const login = function () {
		console.log('login: ', userName, userPassword);
		// Save password to session storage
		// todo***************  THIS IS TEMPORARY PENDING IMPLEMENTING AUTHENTICATION  *******
		sessionStorage.setItem('userName', userPassword);
		sessionStorage.setItem('userPassword', userPassword); //******/
		// ***************  THIS IS TEMPORARY PENDING IMPLEMENTING AUTHENTICATION  *******

		// Redirect to another page
		if (!browser) {
			console.log('Executing in server');
			// goto('user/login/{userName}');
			redirect(301, '/user/login/{userName}');
		} else {
			console.log('Executing in browser');
			goto(`user/login/{userName}`);

			console.log('after goto in login');
		}
	};
</script>

<div class="welcome">
	<h1 style="color=red;">Welcome to Life Albums</h1>
	<h2>Save memories with video, images, music, narration, diaries and more</h2>
	<div class="login">
		<h2 class="loginTitle">Please Login -- or create an account</h2>
		<form class="loginForm" action="user/login/{userName}">
			<!-- <form class="loginForm"> -->
			<input
				class="loginName"
				id="name"
				type="text"
				placeholder="Enter your username (userId)"
				bind:value={userName}
			/>
			<input
				class="loginPassword"
				id="password"
				type="password"
				placeholder="Enter your password"
				bind:value={userPassword}
			/>
			<button type="submit" class="loginButton" on:click={login}>Click to Login</button>
			<!-- <button type="submit" class="loginButton">Click to Login</button> -->
		</form>
	</div>
</div>

<style>
	.loginTitle {
		margin: 2rem;
		position: relative;
		color: #070abd;
		font-size: 2rem;
		text-shadow: 2px 2px 2px 2px rgb(218, 204, 12);
	}
	.welcome {
		display: flex;
		flex-direction: column;
		align-items: center;
		justify-content: center;
		min-height: 100vh;
		color: #070abd;
		font-size: 1.5rem;
		text-shadow: 2px 2px 2px rgb(218, 204, 12);
		background-image: url(src/lib/Assets/WelcomePageBackground.jpg);
		background-size: cover;
		background-position-y: bottom;
	}
	.loginForm {
		display: flex;
		align-items: center;
		justify-content: center;
		width: 95%;
	}
	.loginName {
		display: flex;
		margin: 2rem;
		width: 90%;
		font: medium bold;
		font-family: Cambria, Cochin, Georgia, Times, 'Times New Roman', serif;
		font-size: 30px;
		border: 5px solid black;
		box-sizing: border-box;
	}
	.loginName:hover {
		border: 5px solid rgb(243, 8, 8);
	}

	.loginPassword {
		display: flex;
		margin: 2rem;
		width: 90%;
		font: medium bold;
		font-family: Cambria, Cochin, Georgia, Times, 'Times New Roman', serif;
		font-size: 30px;
		border: 6px solid black;
		box-sizing: border-box;
	}

	.loginPassword:not(:hover) {
		border: 5px solid black;
	}
	.loginPassword:hover {
		border: 5px solid rgb(243, 8, 8);
	}

	.login {
		/* display: flex; */
		width: 70%;
		height: 40%;
		margin: 2rem;
		border: rgb(226, 156, 43) 3px solid;
		border-radius: 3px;
		border-width: 4px;
		justify-items: center;
		align-items: center;
		box-sizing: border-box;
		background-color: rgba(224, 255, 255, 0.5);
	}

	.login:hover {
		background-color: rgba(224, 255, 255, 1);
	}

	.loginButton {
		display: flex;
		width: 50%;
		font: medium bold;
		font-family: Cambria, Cochin, Georgia, Times, 'Times New Roman', serif;
		font-size: 30px;
		box-sizing: border-box;
		border: rgb(37, 228, 235) 3px solid;
		border-radius: 26px;
		border-width: 4px;
		justify-items: center;
		align-items: center;
		background-color: rgba(10, 94, 221, 0.2);
	}
	.loginButton:hover {
		border: 6px solid rgb(243, 8, 8);
	}
</style>
