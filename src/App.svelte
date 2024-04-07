<script>
	import Breadcrumbs from './lib/Breadcrumbs.svelte';
	import Places from './lib/Places.svelte';
	import Trips from './lib/Trips.svelte';
	import Pictures from './lib/Pictures.svelte';
	import People from './lib/People.svelte';
	import Me from './lib/Me.svelte';

	let items = [{ text: 'Home', href: '/' }];
</script>

<main>
	<div class="HomePage">
		Images of Life xxx
		<div class="grid_container">
			<div class="home_header">home_header <Breadcrumbs {items} /></div>
			<div class="home_left_navigation">
				<div class="home_nav">
					<p>What do you want to see?</p>
					<nav class="home_left_nav">
						<li class="nav_list">
							<a href="#places">Places</a>
						</li>
						<li class="nav_list">
							<a href="#trips">Trips</a>
						</li>
						<li class="nav_list">
							<a href="#events">Events</a>
						</li>
						<li class="nav_list">
							<a href="#pictures">Pictures</a>
						</li>
						<li class="nav_list">
							<a href="#people">People</a>
						</li>
						<li class="nav_list">
							<a href="#me">Me</a>
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
						</li>
						<li class="nav_list">
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
					</nav>
				</div>
			</div>
			<div class="home_footer">home_footer</div>
		</div>
	</div>
</main>

<!-- <Places /> -->

<div
	ID="places"
	class="places_container page"
>
	<div class="places_body">
		<Places {items} />
	</div>
</div>
<!-- Trips -->
<div
	ID="trips"
	class="trips_container page"
>
	<div class="trips_body">
		<Trips {items} />
	</div>
</div>
<div
	ID="events"
	class="events_container page"
>
	<div class="events_body">
		<Events {items} />
	</div>
</div>
<div
	ID="pictures"
	class="pictures_container page"
>
	<div class="places_body">
		<pictures {items} />
	</div>
</div>
<div
	ID="people"
	class="people_container page"
>
	<div class="places_body">
		<people {items} />
	</div>
</div>
<div
	ID="me"
	class="me_container page"
>
	<div class="places_body">
		<me {items} />
	</div>
</div>

<style>
	li > a {
		position: relative;
		left: -7px;
		margin-right: 0;
		width: 5rem;
		text-decoration: dotted;
	}
	.nav_list {
		margin: 0 5px;
		text-decoration: dashed;
	}
	.page {
		width: 100vw;
		height: 100vh;
		overflow: hidden;
		position: -webkit-sticky;
		position: sticky;
		top: 0;
	}
	.places_container {
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
	.places_body {
		width: 100vw;
		height: 100%;
	}
	.trips_container {
		background-color: rgb(129, 83, 189);

		overflow: auto;
		overscroll-behavior: contain;
		height: 100vw;
		width: 100vw;
		position: -webkit-sticky;
		position: sticky;
		top: 0;
		max-height: 1000px;
	}
	.trips_body {
		width: 100vw;
		height: 100%;
	}
	.pictures_container {
		background-color: rgb(129, 83, 189);
		height: 100vw;
		width: 100vw;
		overflow: auto;
		overscroll-behavior: contain;

		position: -webkit-sticky;
		position: sticky;
		top: 0;
		max-height: 1000px;
	}
	.pictures_body {
		width: 100vw;
		height: 100%;
	}
	.people_container {
		background-color: rgb(129, 83, 189);

		overflow: auto;
		overscroll-behavior: contain;
		max-height: 1000px;
		position: -webkit-sticky;
		position: sticky;
		top: 0;
	}
	.people_body {
		width: 100vw;
		height: 100%;
	}
	.me_container {
		background-color: rgb(129, 83, 189);

		overflow: auto;
		overscroll-behavior: contain;
		max-height: 1000px;
		position: -webkit-sticky;
		position: sticky;
		top: 0;
	}
	.me_body {
		width: 100vw;
		height: 100%;
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
</style>
