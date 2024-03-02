# Node.js REST API Server

This is a simple Node.js REST API server for testing purposes.

## Description

This project provides a basic RESTful API server built with Node.js and Express. It includes endpoints for checking server status, retrieving a list of users, and signing up new users.

## Notes

- This server is for demonstration and testing purposes only.
- The provided example user data in `/users` and `/signup` endpoints is static and not stored in a database. Just for return something.

## Technologies Used

- **Node.js**: JavaScript runtime for server-side development.
- **Express**: Web framework for Node.js used to create RESTful APIs.
- **JavaScript**: Programming language for server-side logic.
- **JSON**: Data format used for communication between client and server.

## Endpoints

### 1. Server Status

- **URL**: `/status`
- **Method**: GET
- **Description**: Returns a simple status message indicating the server is running.

### 2. Get All Users

- **URL**: `/users`
- **Method**: GET
- **Description**: Returns a list of example user data.

   - **Example Response**:
     ```json
     {
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
     }
     ```

### 3. Signup Endpoint

- **URL**: `/signup`
- **Method**: POST
- **Description**: Allows users to sign up with provided data.

   - **Request Body**:
     ```json
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
     }
     ```

   - **Example Response**:
     ```json
     {
       "statusOp": "success",
       "message": "User signed up successfully",
       "data": {
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
       }
     }
     ```

## Notes

- This server is for demonstration and testing purposes only.
- The provided example user data in `/users` and `/signup` endpoints is static and not stored in a database.
