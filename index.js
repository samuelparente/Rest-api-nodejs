//Node js rest api server for testing purposes
//Samuel parente

//Modules required
const express = require('express');

//Create express app
const myApp = express();

//Tell to parse json
myApp.use(express.json());

//Use predefined port or the port defined by the server where the app is deployed
const PORT = process.env.PORT || 3000;

//Tell server to start listening
myApp.listen(PORT, () => {
  console.log("Server Listening on PORT:", PORT);
});

//Endpoint for status
myApp.get('/status',(request,response) => {
	
	const statusServer = {
		"Status":"Server is running"
	};
	
	response.send(statusServer);
});

//Endpoint for get all users
myApp.get('/users',(request,response) => {
	
	const allUsers = {
	  "persons": [
		{
		  "firstName": "John",
		  "lastName": "Doe",
		  "email": "john.doe@example.com",
		  "address": "123 Main Street",
		  "country": "United States",
		  "phoneNumber": "+1 555-123-4567",
		  "hobbies": ["Reading", "Running", "Cooking"],
		  "favoriteColor": "Blue",
		  "favoriteFood": "Pizza",
		  "car": {
			"brand": "Toyota",
			"color": "Silver",
			"horsepower": 200,
			"year": 2018
		  }
		},
		{
		  "firstName": "Alice",
		  "lastName": "Smith",
		  "email": "alice.smith@example.com",
		  "address": "456 Elm Street",
		  "country": "Canada",
		  "phoneNumber": "+1 555-987-6543",
		  "hobbies": ["Painting", "Hiking", "Yoga"],
		  "favoriteColor": "Green",
		  "favoriteFood": "Sushi",
		  "car": {
			"brand": "Honda",
			"color": "Black",
			"horsepower": 180,
			"year": 2020
		  }
		},
		{
		  "firstName": "Michael",
		  "lastName": "Johnson",
		  "email": "michael.johnson@example.com",
		  "address": "789 Oak Avenue",
		  "country": "United Kingdom",
		  "phoneNumber": "+44 20 1234 5678",
		  "hobbies": ["Golf", "Photography", "Traveling"],
		  "favoriteColor": "Red",
		  "favoriteFood": "Steak",
		  "car": {
			"brand": "BMW",
			"color": "White",
			"horsepower": 250,
			"year": 2019
		  }
		},
		{
		  "firstName": "Emily",
		  "lastName": "Brown",
		  "email": "emily.brown@example.com",
		  "address": "101 Pine Street",
		  "country": "Australia",
		  "phoneNumber": "+61 2 9876 5432",
		  "hobbies": ["Dancing", "Singing", "Scuba Diving"],
		  "favoriteColor": "Purple",
		  "favoriteFood": "Pasta",
		  "car": {
			"brand": "Ford",
			"color": "Blue",
			"horsepower": 150,
			"year": 2017
		  }
		},
		{
		  "firstName": "David",
		  "lastName": "Lee",
		  "email": "david.lee@example.com",
		  "address": "321 Maple Lane",
		  "country": "Singapore",
		  "phoneNumber": "+65 9123 4567",
		  "hobbies": ["Cycling", "Chess", "Movies"],
		  "favoriteColor": "Yellow",
		  "favoriteFood": "Noodles",
		  "car": {
			"brand": "Mercedes-Benz",
			"color": "Grey",
			"horsepower": 300,
			"year": 2021
		  }
		}
	  ]
	};
	
	response.send(allUsers);
});

//Endpoint for post signup
myApp.post('/signup',(request,response) => {
	
	const requestData = request.body;
	
	var responseData = {
		statusOp: 'success',
		message: 'User signed up successfully',
		data: requestData
	};
	response.send(responseData);
});
