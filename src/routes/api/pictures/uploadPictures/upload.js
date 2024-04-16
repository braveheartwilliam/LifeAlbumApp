// goes with additional code in other 2 files

import { writeFileSync } from 'fs';

export async function post({ request }) {
	const data = JSON.parse((await request.body.read()).toString());

	const file = data['image'];

	writeFileSync(`static/avatar.png`, file, 'base64');
}