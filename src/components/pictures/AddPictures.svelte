<script>
	import Breadcrumbs from '/src/components/Breadcrumbs.svelte';
	import { addPictures } from '/src/lib/api/server/pictures.js';

	//  ******************** for modal ************************
	import { preloadData, pushState } from '$app/navigation';
	import { page } from '$app/stores';
	import GenericModal from '/src/components/GenericModal.svelte';
	import UploadPictures from '/src/routes/api/pictures/uploadPictures/+page.svelte';

	//  ******************** for modal ************************

	export let items;
	export let pictureURL;
	let currActionType = items[items.length - 1].actionType;

	items.push({ text: 'Add Pictures', href: '#pictures', actionType: currActionType });

	//****************
	pictureURL;
	let date = '05/10/2023';
	let city = 'Mankato';
	let region = 'north central';
	let state = 'Minnesota';
	let country = 'USA';
	let geolocation = '2222, 3333';
	let description = 'beautiful nothing';
	let userName = sessionStorage.getItem('userName');
	let dateTime = new Date().toLocaleString();
	let imageFileName;
	$: imageFileName = imageFileName;
	$: console.log('imageFileName: ', imageFileName);

	let fileName;
	$: fileName = fileName;
	$: console.log('fileName: ', fileName);

	let newFileName = '';
	$: newFileName = newFileName;
	$: console.log('newFileName: ', newFileName);

	let success = false;
	$: success = success;

	//  ******************** for modal ************************

	let showModal = false;

	//  ******************** for modal ************************

	function closeModal(newFileName) {
		pictureURL = sessionStorage.getItem('newFileName');
		console.log('pictureURL: ', pictureURL, 'fileName:  ', fileName, 'newFileName:  ', newFileName);
		showModal = false;
		success = false;
		sessionStorage.removeItem('newFileName');
		// let temp = 		pictureURL = sessionStorage.getItem('newFileName');
		// console.log('temp: ', temp);



	}

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

	//  ******************** for modal ************************

	async function openModal() {
		console.log('********openModal***********');

		const result = await preloadData('/api/pictures/uploadPictures');
		if (result.type === 'loaded' && result.status === 200) {
			showModal = true;
			// pushState('/src/routes/upload', { selected: result.data });
			console.log(
				'openModal - result.data: ',
				result.data,
				'type: ',
				result.type,
				'status: ',
				result.status
			);
		} else {
			console.log(' error in preloadData - result in openModal:  ', result);
		}
	}

	//  ******************** for modal ************************

	// handleSubmit();
</script>

<div class="Pictures_home">
	<Breadcrumbs {items} />

	<h1>Add Pictures</h1>

	//*******************/

	<!-- <form on:submit|preventDefault={handleSubmit}> -->
	<form>
		<label>
			<input type="text" bind:value={date} placeholder="Enter the date of your picture" />
		</label>
		<label>
			<input
				type="text"
				bind:value={pictureURL}
				placeholder="Copy and Paste the URL of your picture"
			/>

			<button on:click={openModal}>Upload Image</button>
		</label>

		<label>
			<input type="text" bind:value={description} placeholder="Describe your picture" />
		</label>

		<label>
			<input type="text" bind:value={city} placeholder="City your picture was taken" />
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
		<!-- <label> -->
		<!-- <input type="text" bind:value={description} placeholder="Describe your picture" /> -->
		<!-- <img src="C:\Users\Trader Bill\Pictures\iCloud Photos\Photos\IMG_0991(1).PNG" alt="" /> -->
		<!-- </label> -->

		<!-- <label>
			<input
				type="text"
				bind:value={geolocation}
				placeholder="Enter the location of your picture"
			/>
		</label> -->

		{#if pictureURL}
			<button type="submit" on:click={handleSubmit}>Add Picture</button>
		{/if}
	</form>
	{#if formattedString}
		<p>
			The following was added to the database successfully: {@html '<br><br>' + formattedString}
		</p>
	{/if}

	{#if showModal}
		<div class="modal">
			<div class="modal-content">
				<UploadPictures data="{$page.state.selected}" />
				<button class="closeImage" on:click={closeModal(newFileName)}>
					{#if { success} == true }
						Save Picture
					{:else}
						Cancel
					{/if}
				</button>
			</div>
		</div>
	{/if}
</div>

<style>
	.Pictures_home {
		color: blue;
		font-size: large;
	}
	.modal {
		background-color: lightcoral;
		width: 40rem;
		height: 20rem;
		position: relative;
		left: 20vw;
		top: 0vh;
		box-sizing:border-box;
		border-color: rgb(0, 0, 0);
		border-style: solid;

	}
	.modal-content {
		position: relative;
		left: 0vw;
		top: 5vh;
		box-sizing: content-box;

		margin: 0vh 30vw 20vh 30vw;
	}

	.closeImage {
		margin: 1vh 10vw 20vh -3vw;
	}
</style>
