# Instructions

To get all dogs:

(GET) http://localhost:3000/api/dogs/all_dogs

To get one dog by ID:

(GET) http://localhost:3000/api/dogs/:id

To create a dog:

(POST) http://localhost:3000/api/dogs/create_a_dog

req.body params:

{
"name": "String",
"breed": "String",
"age": Number
}

To update a dog:

(PUT) hhttp://localhost:3000/api/dogs/:id

To delete a dog:

(DELETE) http://localhost:3000/api/dogs/:id
