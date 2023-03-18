# API Dogs

Api Dogs is my first public API. Reference application. (school project)

## Instructions

To get all dogs:

(GET) https://apidogs.herokuapp.com/api/dogs/all_dogs

To get one dog by ID:

(GET) https://apidogs.herokuapp.com/api/dogs/:id

To create a dog:

(POST) https://apidogs.herokuapp.com/api/dogs/create_a_dog

req.body params:

{
"name": "String",
"breed": "String",
"age": Number
}

To update a dog:

(PUT) https://apidogs.herokuapp.com/api/dogs/:id

To delete a dog:

(DELETE) https://apidogs.herokuapp.com/api/dogs/:id
