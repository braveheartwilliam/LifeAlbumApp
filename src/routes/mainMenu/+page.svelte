<script>
	import Breadcrumbs from '/src/components/Breadcrumbs.svelte';
	import Places from '/src/components/Places.svelte';
	import { page } from '$app/stores';
	import { goto } from '$app/navigation';
	// import Trips from '$lib//Trips.svelte';
	// import Pictures from '$lib//Pictures.svelte';
	// import People from '$lib/People.svelte';
	// import Me from '$lib/Me.svelte';
	// import Events from '$lib/Events.svelte';
	// import Music from '$lib/Music.svelte';
	// import Diaries from '$lib/Diaries.svelte';
	// import TravelBlogs from '$lib/TravelBlogs.svelte';
	// import Video from '$lib/Video.svelte';
	// let actionType = 'view';
	let compParam;

	const userName = sessionStorage.getItem('userName');

	export let items = [];

	items = [{ text: 'Home Page', href: '/mainMenu', actionType: 'view' }];
	console.log('mainMenu: ', items);

	// items = [{ text: '... Home Page', href: '/mainMenu' }];

	console.log('mainMenu2: ', items);

	// Serialize the array before passing it to the URL
	let serializedItems = '';

	// function setAction(action) {
	// 	// let actionType = action;
	// 	compParam = { crumbs: items, actionType: action };
	// 	console.log('mainMenu: ', items, action, compParam);
	// }

	function performSerialization(action) {
		console.log('performSerialization: action: ', action);

		items[0].actionType = action;
		// items.userName = userName;
		console.log('performSerialization: ', items);

		serializedItems = encodeURIComponent(JSON.stringify(items));
		// goto('route/pages/pictures/{serializedItems}/');
		//   window.location.href = `route/pages/pictures/${serializedItems}/`;
	}
</script>

<main>
	<div class="HomePage">
		Life Album for {userName}
		<div class="grid_container">
			<div class="home_header">home_header <Breadcrumbs {items} /></div>
			<div class="home_left_navigation">
				<div class="home_nav">
					<p>What do you want to see?</p>
					<nav class="home_left_nav">
						<li class="nav_list">
							<a on:click={performSerialization('view')} href="/pages/places/{serializedItems}/"
								>Places</a
							>
						</li>
						<li class="nav_list">
							<a on:click={performSerialization('view')} href="/pages/trips/{serializedItems}/"
								>Trips</a
							>
						</li>
						<li class="nav_list">
							<!-- <details>
								<summary class="nav_list_mainSelection"> Events </summary> -->
							<p class="nav_list_mainSelection">Events</p>

							<ul class="nav_list_ul, no_list_line">
								<li>
									<a on:click={performSerialization('add')} href="/pages/events/{serializedItems}/"
										>Add Event</a
									>
								</li>
							</ul>
							<!-- </details> -->
							<!-- </details> -->
						</li>
						<li class="nav_list">
							<!-- <details> -->
							<!-- <summary class="nav_list_mainSelection"> Pictures </summary> -->
							<p class="nav_list_mainSelection">Pictures</p>

							<ul class="nav_list_ul vertical-menu">
								<li>
									<a
										class="active"
										href="/pages/pictures/{serializedItems}/"
										on:click={() => performSerialization('view')}
										>View Pictures
									</a>
									<!-- <button type="button" class="link" on:click={performSerialization('view')}>
										<span>View</span>
									</button> -->
								</li>
								<li>
									<a
										on:click={() => performSerialization('add')}
										href="/pages/pictures/{serializedItems}/">Add Pictures</a
									>
								</li>
								<li>
									<a
										on:click={() => performSerialization('update')}
										href="/pages/pictures/{serializedItems}/">Update Pictures</a
									>
								</li>
								<li>
									<a
										on:click={() => performSerialization('delete')}
										href="/pages/pictures/{serializedItems}/">Delete Pictures</a
									>
								</li>
							</ul>
							<!-- </details> -->
						</li>

						<li class="nav_list">
							<a on:click={performSerialization('view')} href="/pages/people/{serializedItems}/"
								>People</a
							>
						</li>
						<li class="nav_list">
							<a on:click={performSerialization('view')} href="/pages/me/{serializedItems}/">Me</a>
						</li>
						<li class="nav_list">
							<a on:click={performSerialization('view')} href="/pages/music/{serializedItems}/"
								>Music</a
							>
						</li>
						<li class="nav_list">
							<a on:click={performSerialization('view')} href="/pages/diaries/{serializedItems}/"
								>Diaries</a
							>
						</li>
						<li class="nav_list">
							<a
								on:click={performSerialization('view')}
								href="/pages/travelBlogs/{serializedItems}/">Travel Blogs</a
							>
						</li>
						<li class="nav_list">
							<a on:click={performSerialization('view')} href="/pages/videos/{serializedItems}/"
								>Video</a
							>
						</li>
						<li class="nav_list">
							<a on:click={performSerialization('view')} href="/pages/albums/{serializedItems}/"
								>Albums</a
							>
						</li>
					</nav>
				</div>
			</div>
			<div class="home_body">home_body</div>
			<div class="home_right_navigation">
				<div class="home_nav">
					<p>What do you want to do?</p>
					<nav class="home_right_nav">
						<li class="nav_list">
							<a href="#places">Manage Places</a>
							<!-- TODO make this a dropdowns -->
							<ul>
								<li>Add places</li>
								<li>Edit places</li>
								<ul>
									<li>groups</li>
									<li>individual</li>
								</ul>
								<li>Delete places</li>
							</ul>
						</li>

						<!-- <li class="nav_list">
							<a href="#trips">Manage Trips</a>
						</li>
						<li class="nav_list">
							<a href="#events">Manage Events</a>
						</li>
						<li class="nav_list">
							<a href="#pictures">Manage Pictures</a>
						</li>
						<li class="nav_list">
							<a href="#people">Manage People</a>
						</li>
						<li class="nav_list">
							<a href="#me">Manage Me</a>
						</li>
						<li class="nav_list">
							<a href="#music">Manage Music</a>
						</li>
						<li class="nav_list">
							<a href="#diaries">Manage Diaries</a>
						</li>
						<li class="nav_list">
							<a href="#travelBlogs">Manage Travel Blogs</a>
						</li>
						<li class="nav_list">
							<a href="#video">Manage Video</a>
						</li> -->
					</nav>
				</div>
			</div>
			<div class="home_footer">home_footer</div>
		</div>
	</div>
</main>

<!-- <Places /> -->

<!-- <div ID="places" class="manage_list">
	<div class="places_body">
		<Places {items} />
	</div>
</div>
<!-- Trips -->
<!-- <div ID="trips" class="manage_list">
	<div class="trips_body">
		<Trips {items} />
	</div>
</div>
<div ID="Events" class="manage_list">
	<div class="events_body">
		<Events {items} />
	</div>
</div>
<div ID="pictures" class="manage_list">
	<div class="places_body">
		<Pictures {items} />
	</div>
</div>
<div ID="people" class="manage_list">
	<div class="places_body">
		<People {items} />
	</div>
</div>
<div ID="me" class="manage_list">
	<div class="places_body">
		<Me {compParam} />
	</div>
</div>
<div ID="music" class="manage_list">
	<div class="places_body">
		<Music {items} />
	</div>
</div>
<div ID="diaries" class="manage_list">
	<div class="places_body">
		<Diaries {items} />
	</div>
</div>
<div ID="travelBlogs" class="manage_list">
	<div class="places_body">
		<TravelBlogs {items} />
	</div>
</div>
<div ID="me" class="manage_list">
	<div class="places_body">
		<Video {items} />
	</div>
</div> -->
-->

<style>
	nav {
		list-style-type: none;
	}

	li > a {
		position: relative;
		left: -7px;
		margin-right: 0;
		width: 5rem;
		text-decoration: dotted;
	}
	.nav_list {
		margin: 0 5px;
		text-decoration: none;
	}
	.nav_list_mainSelection {
		margin: 0 0 0 0;

		color: blue;
	}
	.no_list_line {
	}

	.nav_list_ul {
		margin: 0 0 0 0;
		text-decoration: none;
	}

	button.link {
		font-family: 'Verdana' sans-serif;
		font-size: 1em;
		text-align: left;
		color: blue; /* Link color */
		background: none;
		margin: 0;
		padding: 0;
		border: none;
		cursor: pointer; /* Cursor style */
		overflow: visible; /* Ensures width is not restricted */
		width: auto; /* Allows the button to shrink to fit the content */
	}

	button.link span {
		text-decoration: underline; /* Underline text */
	}

	button.link:hover span,
	button.link:focus span {
		color: black; /* Change text color on hover/focus */
		text-decoration: none; /* Remove underline on hover/focus */
	}

	.page {
		width: 100vw;
		height: 100vh;
		overflow: hidden;
		position: -webkit-sticky;
		position: sticky;
		top: 0;
	}
	.manage_list {
		overflow: auto;
		overscroll-behavior: contain;
		background-color: aqua;
		height: 100vw;
		width: 100vw;
		position: -webkit-sticky;
		position: sticky;
		top: 0;
		max-height: 1000px;
	}

	.HomePage {
		width: 100vw;
		height: 100vh;
		background-color: rgb(201, 15, 61);
		overflow: -moz-hidden-unscrollable;
		overscroll-behavior: contain;
		overflow: hidden;
		/* max-height: 85rem; */
	}
	.grid_container {
		display: grid;
		grid-template-columns: 1fr repeat(8, 8fr) 1fr;
		grid-template-rows: 10rem repeat(6, 10fr) 5rem;
		overflow: auto;
		overscroll-behavior: contain;
		height: 100%;
		width: 100vw;
		max-height: 1000px;
	}
	.home_left_navigation {
		background-color: aquamarine;
		font-size: 25px;
		color: red;
		grid-column: 1/1;
		grid-row: 2/8;
		min-width: 15rem;
	}
	.home_nav {
		font-size: 20px;
		color: red;
		width: 15rem;
		margin: 0 5px;
		display: flex;
		flex-direction: column;
		text-align: left;
	}
	.home_nav > p {
		text-decoration: underline;
		color: rgb(209, 12, 71);
	}

	.home_right_navigation {
		background-color: rgb(49, 108, 177);
		color: white;
		font-size: 10px;
		grid-column: 10/11;
		grid-row: 2/8;
		min-width: 15rem;
	}
	.home_right_nav {
		color: white;
		margin-right: -70px;
	}
	.home_right_nav > li > a {
		color: white;
		font-size: 20px;
		margin-right: 5px;
	}
	.home_header {
		background-color: rgb(230, 227, 100);
		font-size: 25px;

		grid-column: 1/11;
		grid-row: 1/1;
		color: black;
	}
	.home_body {
		background-color: rgb(236, 208, 81);
		font-size: 25px;
		color: red;
		grid-column: 2/10;
		grid-row: 2/8;
		min-width: 30rem;
		min-height: 100px;
	}
	.home_footer {
		background-color: rgb(240, 169, 240);
		font-size: 25px;
		color: red;
		grid-column: 1/11;
		grid-row: 8/9;
		min-height: 100px;
	}
	.logo:hover {
		filter: drop-shadow(0 0 2em #646cffaa);
	}
	.logo.svelte:hover {
		filter: drop-shadow(0 0 2em #ff3e00aa);
	}
	.vertical-menu {
		width: 70rem;
	}

	.vertical-menu a {
		background-color: #eee;
		color: black;
		display: block;
		padding: 12px;
		text-decoration: none;
	}

	.vertical-menu a:hover {
		background-color: #04aa6d;
		color: white;
	}

	.vertical-menu a.active {
		background-color: #04aa6d;
		color: white;
	}
</style>
