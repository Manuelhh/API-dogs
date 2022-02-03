# Instructions

To get all dogs:

(GET) https://dogsdogs.herokuapp.com/api/dogs/all_dogs

To get one dog by ID:

(GET) https://dogsdogs.herokuapp.com/api/dogs/:id

To create a dog:

(POST) https://dogsdogs.herokuapp.com/api/dogs/create_a_dog

req.body params:

{
"name": "String",
"breed": "String",
"age": Number
}

To update a dog:

(PUT) https://dogsdogs.herokuapp.com/api/dogs/:id

To delete a dog:

(DELETE) https://dogsdogs.herokuapp.com/api/dogs/:id
