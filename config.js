const {Client} = require('pg');

// Configures the client with the correct details; change these values as needed
const client = new Client({
	host: "localhost",
	port: 5432,
	user: "postgres",
	password: "postgres",
	database: "fitness_club"	
});

module.exports = client;
