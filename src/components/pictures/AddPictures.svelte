<script>
	import Breadcrumbs from '/src/components/Breadcrumbs.svelte';
	import { addPictures } from '/src/lib/api/server/pictures.js';

	export let items;
	let currActionType = items[items.length - 1].actionType;

	items.push({ text: 'Add Pictures', href: '#pictures', actionType: currActionType });

	//****************
	let pictureURL = 'c:\\fakepath\\placeholder.png';
	let date = '05/10/2023';
	let city = 'Mankato';
	let region = 'north central';
	let state = 'Minnesota';
	let country = 'USA';
	let geolocation = '2222, 3333';
	let description = 'beautiful nothing';
	let userName = sessionStorage.getItem('userName');
	let dateTime = new Date().toLocaleString();
	console.log();

	console.log('AddPictures - userName: ' + userName);

	let formattedString;

	async function handleSubmit() {
		try {
			const response = await addPictures({
				userName,
				date,
				city,
				region,
				state,
				country,
				geolocation,
				description,
				pictureURL,
				dateTime
			});
			const responseData = response.props.result[0];
			console.log('responseData: ', responseData);

			formattedString = Object.entries(responseData)
				.map(([key, value]) => `* ${key}: ${value}`)
				.join('<br>');
			console.log('formattedString: ', formattedString);

			// const { city } = responseData;
			// console.log('city: ', city);

			// console.log('response: ', response.props.result[0]);
		} catch (error) {
			console.log('error in picture.js: ', error);
		}
	}
	handleSubmit();
</script>

<div class="Pictures_home">
	<Breadcrumbs {items} />

	<h1>Add Pictures</h1>

	//*******************/

	<form on:submit|preventDefault={handleSubmit}>
		<label>
			<input type="text" bind:value={date} placeholder="Enter the date of your picture" />
		</label>
		<label>
			<input
				type="text"
				bind:value={pictureURL}
				placeholder="Copy and Paste the URL of your picture"
			/>
		</label>

		<label>
			<input type="text" bind:value={description} placeholder="Describe your picture" />
		</label>

		<label>
			<input type="text" bind:value={city} placeholder="State/Provence your picture was taken" />
		</label>
		<label>
			<input type="text" bind:value={state} placeholder="State/Provence your picture was taken" />
		</label>
		<label>
			<input type="text" bind:value={country} placeholder="Country your picture was taken" />
		</label>
		<label>
			<input
				type="text"
				bind:value={region}
				placeholder="Region (Europe, Asia, North America, etc.) your picture was taken"
			/>
		</label>

		<label>
			<input type="text" bind:value={description} placeholder="Describe your picture" />
		</label>
		<!-- <label>
			<input
				type="text"
				bind:value={geolocation}
				placeholder="Enter the location of your picture"
			/>
		</label> -->

		<button type="submit">Submit</button>
	</form>

	<p>The following was added to the database successfully: {@html '<br><br>' + formattedString}</p>
</div>

<style>
	.Pictures_home {
		color: blue;
		font-size: large;
	}
</style>
