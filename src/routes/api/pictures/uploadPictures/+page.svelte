<!-- Additional coding alternatives for the user to upload images -->

<script>
	let fileInput;
	let files;
	let avatar = 'src/assets/WelcomePageBackground.jpg';
	let imageURL;
	export let imageFileName;
	export let newFileName;
	export let success = false;

	function getBase64(image) {
		console.log('getBase64 - image: ', image, 'imageURL: ', imageURL);
		imageFileName = image.name;
		sessionStorage.setItem('newFileName', image.name);
		imageURL = image.name;
		newFileName = image.name;
		console.log('getBase64 - imageFileName: ', imageFileName);

		const reader = new FileReader();
		console.log('new reader: ', reader);

		reader.readAsDataURL(image);
		console.log('readAsDataURL: ', reader.readAsDataUR);

		reader.onload = (e) => {
			avatar = e.target.result;
			upLoadFunc(e.target.result, imageURL);
		};
	}

	let upLoadFunc = async function uploadFunction(imgBase64, imageURL) {
		console.log('uploadFunction - imgBase64: ', imgBase64);

		const data = {};
		const imgData = imgBase64.split(',');
		console.log(imgData);

		data['image'] = imgData[1];
		data['imageURL'] = imageURL;
		imageFileName = imageURL;
		console.log('imageFileName: ', imageFileName);

		// file = data['image']
		console.log('uploadFunction - data: ', data);
		console.log('just before fetch in upLoadFunction');

		const result = await fetch(`/upload`, {
			// await fetch(`src/routes/api/pictures/uploadPictures/+page.server.js`, {
			method: 'POST',
			headers: {
				'Content-Type': 'application/json',
				Accept: 'application/json'
			},
			body: JSON.stringify(data)
		});
		avatar = '';
		console.log('imageFileName: ', imageFileName);
		newFileName = imageURL;
		console.log(
			'just after fetch in upLoadFunction--',
			'result:  ',
			result,
			'newFileName:  ',
			newFileName
		);
		return newFileName;
	};
</script>

<div class="container">
	{#if avatar}
		<img id="avatar" src="/src/assets/WelcomePageBackground.jpg" alt="avatar" />
	{/if}
	<!-- {#if avatar}
		<img id="avatar" src={avatar} alt="avatar" />
	{:else}
		<p>At avatar from assets</p>
		<img id="avatar" src="/src/assets/WelcomePageBackground.jpg" alt="avatar" />
	{/if} -->
	<input
		class="hidden"
		id="file-to-upload"
		type="file"
		accept=".png,.jpg"
		bind:files
		bind:this={fileInput}
		on:change={() => getBase64(files[0])}
	/>
	{#if avatar}
		<button class="upload-btn" on:click={() => fileInput.click()}>Upload</button>
	{/if}
</div>

<style>
	.container {
		display: flex;
		flex-direction: column;
		align-items: center;
	}

	#avatar {
		border-radius: 99999px;
		height: 128px;
		width: 128px;
		margin-bottom: 10px;
	}

	.hidden {
		display: none;
	}

	.upload-btn {
		width: 128px;
		height: 32px;
		background-color: black;
		font-family: sans-serif;
		color: white;
		font-weight: bold;
		border: none;
	}

	.upload-btn:hover {
		background-color: white;
		color: black;
		outline: black solid 2px;
	}
</style>
