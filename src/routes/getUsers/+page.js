/**@type {import('./$types' ).PageLoad} */


// import { onMount } from 'svelte';
// import { Surreal } from 'surrealdb.js';
import { dbConnect, db } from '../../lib/api/server/surrealdbConnect.js';

dbConnect();
export async function load({ params }) {
	console.log('params: ', params);

	// const data = await db.query('SELECT * FROM user');
	const result = await db.query( 'SELECT * FROM user' );


	console.log('result: ', result);

	// `result` is the array containing another array with the object
	// Destructure the first element of the outer array to get the inner array
	const [innerArray] = result;
	console.log('innerArray: ', innerArray);

	const arrayResult = [];
	for (let row of innerArray) {
		// Assuming each row is an object, you can directly push it into the array
		arrayResult.push(row);
	}
	const data = arrayResult;

	// console.log('data: ', data);

	console.log('arrayResult: ', arrayResult);

	console.log('arrayResult2: ', arrayResult[0].user);
	console.log('resultReturn: ', data);

	return { props:{ result: arrayResult } };
}

// try {
// 	// Define a complex SurrealQL query to fetch articles along with their authors
// 	const query = `
//         SELECT *
//         FROM user
//       `;
// 	// Define the parameters for your query
// 	const parameters = {};
// 	// Execute the query
// 	const result = await db.Select;
// 	// Assign the result to your local variable
// 	people = result;
// 	console.log('people: ', people);
// } catch (error) {
// 	console.error('Failed to load articles with authors:', error);
// }
