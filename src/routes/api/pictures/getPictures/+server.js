import * as db from '$lib/server/database';

import { json } from '@sveltejs/kit';
// todo*************** */  is this for adding to a table?????
export async function GET(event) {
	// ... endpoint logic
	return json(dataToReturn);
}
// todo end

