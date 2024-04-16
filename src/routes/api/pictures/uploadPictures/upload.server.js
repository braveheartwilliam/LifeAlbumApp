// src/routes/upload.server.ts
import { writeFileSync } from 'fs';
import { join } from 'path';

export async function post(request) {
	const formData = await request.formData();
	const file = formData.get('image');

	if (!file) {
		return { status: 400, body: 'No file uploaded' };
	}
	//  ******************** code to upload file to server ******************
	const filePath = join('static', file.name);  // TODO -- eventually place in cloud server optimized for images (large files)
	writeFileSync(filePath, new Uint8Array(await file.arrayBuffer()));
	//  ******************** code to upload file to server ******************

	return { status: 200, body: 'File uploaded successfully' };
}

