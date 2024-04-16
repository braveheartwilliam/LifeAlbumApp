/**@type {import('/node_modules/types')} */

// import { onMount } from 'svelte';
// import { Surreal } from 'surrealdb.js';
import { dbConnect, db } from './surrealdbConnect.js';

dbConnect();

// export const addPictures = async function load({ params }) {
export const addPictures = async function (request) {
	// console.log('request: ', request);
	const {
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
	} = request;

	const sqlParams = {
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
	};

	// const data = await db.query('SELECT * FROM user');
	const result = await db.query(
		'INSERT INTO Pictures (userName, date, city, region, state, country, geolocation,  description, pictureURL, dateTime) VALUES ($userName, $date, $city, $region, $state, $country, $geolocation, $description, $pictureURL, $dateTime)',
		sqlParams
	);

	// console.log('result: ', result);

	// todo how process result??

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

	console.log('resultReturn: ', data);

	return { props: { result: arrayResult } };
};

export const getPictures = async function load({ params }) {
	console.log('params: ', params);

	// const data = await db.query('SELECT * FROM user');
	const result = await db.query('SELECT * FROM user');

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

	return { props: { result: arrayResult } };
};

//*****************  View  Pictures  ************************/

export const viewPictures = async function (request) {
	// console.log('request: ', request);
	// const {
	// 	// userName,
	// 	// date,
	// 	city,
	// 	region,
	// 	state,
	// 	country,
	// 	geolocation,
	// 	description,
	// 	pictureURL,
	// 	dateTime
	// } = request;
	let userName = request[0];
	let date = request[1];
	console.log('pictures.js -- userName: ', userName, 'date: ', date);

	let stringUserName = ' ';

	// const sqlParams = {
	// 	userName,
	// 	date,
	// 	city,
	// 	region,
	// 	state,
	// 	country,
	// 	geolocation,
	// 	description,
	// 	pictureURL,
	// 	dateTime
	// };

	// **************** TESTING DYNAMIC QUERY **************************

	let criteria = {
		// date: '05/05/2023',
		city: 'New York',
		state: 'New York',
		country: 'USA',
		region: 'North America' // This might be optional
	};

	let query = `SELECT * FROM Pictures WHERE (userName = `;
	let conditions = [`"${userName}"`];

	if (date) {
		conditions.push(`date = "${date}"`);
	}
	// if (criteria.city) {
	// 	conditions.push(`city = '${criteria.city}'`);
	// }

	// if (criteria.state) {
	// 	conditions.push(`state = '${criteria.state}'`);
	// }
	// if (criteria.country) {
	// 	conditions.push(`country = '${criteria.country}'`);
	// }
	// if (criteria.region) {
	// 	conditions.push(`region = '${criteria.region}'`);
	// }

	query += conditions.join(' AND ');
	query += ')';

	console.log('dynamicQuery: ', query, 'CONDITIONS: ', conditions);

	console.log(`{query}, ${query}`);

	// const result = await db.query( `${ query }` );

	const result = await db.query(query);

	// **************** TESTING DYNAMIC QUERY **************************
	// TODO -- clean up
	// *********************** working query **************************

	// const result = await db.query(`SELECT * FROM Pictures WHERE userName = "${userName}"`);

	// *********************** working query **************************

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

	// console.log('arrayResult2: ', arrayResult[0].user);
	console.log('resultReturn: ', data);

	return { props: { result: arrayResult } };

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
};

//*****************  Delete  Pictures  ************************/

export const deletePictures = async function (request) {
	// console.log('request: ', request);
	const { userName, id } = request;

	// const sqlParams = {
	// 	userName,
	// 	ID
	// };
	console.log('deletePicturesJS: ', userName, ' ', id);

	// const data = await db.query('SELECT * FROM user');
	const result = await db.query(`DELETE FROM Pictures WHERE id = "${id}"`);

	// console.log('result: ', result);

	// todo how process result??

	// `result` is the array containing another array with the object
	// Destructure the first element of the outer array to get the inner array

	console.log('delete result: ', result);

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

	console.log('resultReturn: ', data);

	return { props: { result: result } };
};

//  *************************  Working area for dynamic select **************************

let criteria = {
	date: 20,
	city: 'active',
	state: 'New York',
	country: 'USA', //
	region: 'North America' // This might be optional
};

let query = 'SELECT * FROM users WHERE ';
let conditions = [];

if (criteria.age) {
	conditions.push(`age > ${criteria.age}`);
}
if (criteria.status) {
	conditions.push(`status = '${criteria.status}'`);
}
if (criteria.location) {
	conditions.push(`location = '${criteria.location}'`);
}

query += conditions.join(' AND ');

console.log('dyamicQuery: ', query);
