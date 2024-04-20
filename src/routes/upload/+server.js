// goes with additional code in other 2 files

import { writeFileSync } from 'fs';
import { json } from '@sveltejs/kit';
import { Response } from '@sveltejs/kit';

/** @type {import('./$types').RequestHandler} */

export async function POST({ request }) {
	let fileURL;
	try {
		console.log('upload.js --- post');

		const data = await request.json();
		console.log('upload/Server.js data', data);

		// const data = JSON.parse((await request.body.read()).toString());

		const file = data['image'];
		fileURL = data['imageURL'];
		console.log('fileURL: ', fileURL, 'type: ', typeof fileURL);

		writeFileSync(`src/imgUploads/${fileURL}`, file, 'base64');
		// return {
		// 	body: { fileURL: fileURL },
		// 	status: 200,
		// 	headers: { 'Content-Type': 'application/json' }
		// };
		// return {
		// 	body: { fileURL: fileURL },
		// 	status: 200,
		// 	headers: { 'Content-Type': 'application/json' }
		// };

		// return new Response(fileURL, { status: 200, headers: { 'Content-Type': 'image/png' } });
		// return new Response(JSON.stringify(fileURL), {
		// 	status: 200,
		// 	headers: { 'Content-Type': 'image/png' }
		// });

		// return json(fileURL);
		return json({ message: 'Upload successful', statustext: fileURL });
	} catch (error) {
		console.error(' Error making POST request: ', error);
		return {
			status: 500,
			statusText: 'Not OK'
		};
	}
}
