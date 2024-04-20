<script>
	import Breadcrumbs from '/src/components/Breadcrumbs.svelte';
	import { viewPictures, deletePictures } from '/src/lib/api/server/pictures.js';

	export let items;
	let currActionType = items[items.length - 1].actionType;

	items.push({ text: 'View Pictures', href: '#pictures', actionType: currActionType });

	//****************
	let userName = sessionStorage.getItem('userName');
	let dateTime = new Date().toLocaleString();
	let date;
	let city;
	let region;
	let state;
	let country;
	let pictureURL;
	let geolocation;
	let description;

	console.log('ViewPictures - userName: ' + userName);

	let formattedString;
	let responseData;
	let pictureArray = [];
	$: pictureArray = pictureArray;

	let arrayRecord2 = [];

	async function deletePicture(userName, id) {
		console.log('deletePictureVIEW: ', userName, ' ', id);

		try {
			const response = await deletePictures({
				userName,
				id
			});
			responseData = response.props.result;
			console.log('responseData DELETE: ', responseData);

			// let id;
		} catch (error) {
			console.log('error in deletePictures in picture.js: ', error);
		}
		console.log('DELETE - after deletePicture function');

		viewPicturesList();
	}

	async function viewPicturesList() {
		console.log('VIEWPICTURES - viewPicturesList');

		console.log('VIEWPICTURES - userName: ', userName);
		console.log('VIEWPICTURES - date: ', date);
		console.log('VIEWPICTURES - city: ', city);
		console.log('VIEWPICTURES - region: ', region);
		console.log('VIEWPICTURES - state: ', state);
		console.log('VIEWPICTURES - country: ', country);
		// console.log('VIEWPICTURES - geolocation: ', geolocation);
		console.log('VIEWPICTURES - description: ', description);
		console.log('VIEWPICTURES - pictureURL: ', pictureURL);
		// console.log('VIEWPICTURES - dateTime: ', dateTime);

		pictureArray = [];
		let paramArray = [];
		let arrayRecord = [];
		let arrayRecord2 = [];

		if (!userName) {
			return 'not logged in';
		} else {
			paramArray = [...paramArray, userName];
		}

		if (date) {
			paramArray = [...paramArray, date];
		}
		if (city) {
			paramArray = [...paramArray, city];
		}
		if (state) {
			paramArray = [...paramArray, state];
		}
		if (region) {
			paramArray = [...paramArray, region];
		}
		if (country) {
			paramArray = [...paramArray, country];
		}
		if (description) {
			paramArray = [...paramArray, description];
		}
		if (pictureURL) {
			paramArray = [...paramArray, pictureURL];
		}

		console.log('paramArray: ', paramArray);

		try {
			const response = await viewPictures(paramArray);
			responseData = response.props.result;
			console.log('responseData: ', responseData);
			let city;
			let country;
			let description;
			let geolocation;
			let id;
			let pictureURL;
			let region;
			let state;
			let arrayRecord = [];

			for (let i = 0; i <= responseData.length - 1; i++) {
				const {
					city,
					country,
					date,
					description,
					geolocation,
					id,
					pictureURL,
					region,
					state,
					userName
				} = responseData[i];
				// console.log(
				// 	'city, etc: ',
				// 	city,
				// 	country,
				// 	date,
				// 	description,
				// 	geolocation,
				// 	id,
				// 	pictureURL,
				// 	region,
				// 	state,
				// 	userName
				// );
				arrayRecord = [
					'City',
					city,
					'Country',
					country,
					'Date',
					date,
					'Description',
					description,
					'Geolocation',
					geolocation,
					'ID',
					id,
					'PictureURL',
					pictureURL,
					'Region',
					region,
					'State',
					state,
					'Username',
					userName
				];

				pictureArray = [...pictureArray, arrayRecord];
			}

			console.log('pictureArray: ', pictureArray);

			console.log('responseData: ', response.props.result);

			console.log('pictureArray Type: ', typeof pictureArray);
			console.log('arrayRocord2 Type: ', typeof arrayRecord2);
			console.log('arrayRocord', arrayRecord);
		} catch (error) {
			console.log('error in picture.js: ', error);
		}
	}
	console.log('viewPicturesList- end1');

	viewPicturesList();
	console.log('viewPicturesList- end2');
</script>

<div class="Pictures_home">
	<Breadcrumbs {items} />

	<h1>View Pictures</h1>

	<form on:submit|preventDefault={viewPicturesList}>
		<div class="viewPictures_form-labels">
			<label>
				<input
					type="text"
					bind:value={date}
					placeholder="Enter the date of your picture (mm/dd/yyyy)"
				/>
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
		</div>
	</form>

	<h1>View your picture or update information about your picture or delete your picture</h1>

	<div>
		<ul>
			{#each pictureArray as data}
				<li>
					{data[0]}: {data[1]}, {data[2]}: {data[3]}, {data[4]}: {data[5]}, {data[6]}: {data[7]}, {data[8]}:
					{data[9]}, {data[10]}: {data[11]}, {data[12]}: {data[13]}, {data[14]}: {data[15]}, {data[16]}:
					{data[17]}, {data[18]}: {data[19]}
					<img src="/src/IMG_6361.JPG" alt="This Picture">
					<!--  TODO -- ADD IMAGE CODING -->
				</li>
				<!-- <button on:click={viewPicture}>View</button>
				<button on:click={updatePicture}>Update</button> -->
				<button on:click={deletePicture(data[19], data[11])}>Delete</button>
				<!-- // todo change above to use the data[] -->
				<!-- {/each} -->
			{/each}
		</ul>
	</div>
</div>

<style>

img {
	max-width: 5%;
	height: 5%;}

	.Pictures_home {
		color: blue;
		font-size: large;
	}
	.viewPictures_form-labels {
		display: flex;
		flex-direction: column;
		margin: 20px;
		text-align: left;
		width: 40rem;
	}
	label {
		margin-top: 10px;
		margin-bottom: 5px;
	}
	input {
		width: 40rem;
	}
	button {
		margin-top: 5px;
		color: blue;
		border-color: blue;
	}
	button:hover {
		/* color: rgb(255, 0, 55); */
		border-color: rgb(255, 0, 0);
	}
	button::before {
		border-width: 100px;
		border-color: black;
	}
</style>
