// src/lib/surrealdb.js

import { Surreal } from 'surrealdb.js';
// export let db;
export let dbConnect;

export const db = new Surreal();

dbConnect = async () => {
	try {
		// Connect to the database
		await db.connect('http://localhost:8000/rpc', {
			// Set the namespace and database for the connection
			namespace: 'test',
			database: 'test',

			// Set the authentication details for the connection
			auth: {
			username: 'root',
				password: 'root'
			}
		});
	} catch (e) {
		console.error('ERROR', e);
	}
};

// Export a module-scoped promise. By doing this in a separate module, the client can be shared across functions.
