# crud-with-authentication
This is CRUD operation with user authentication using jwt tokens 
You need to use postman to send request to the server
Command to run 
1) git clone https://github.com/coolb0y/crud-with-authentication.git
2) npm i 
if above "npm i" shows error
3) npm i express mongoose dotenv bcrypt jsonwebtoken
4) Install mongodb and run it using below command 
5) mongod
Now open Postman Send post request to /signIn or /signUp for signin and signup respectively.
Use this data to signUp 
{  "Name": "SampleName",
  "email": "mail@mail.com",
  "password": "12345"
}

for SignIn
{ 
  "email": "mail@mail.com",
  "password": "12345"
}
Send get request at /user route to get all users 
Send post request at /User to save a User by Admin directly 
get delete put patch request to at "/User/:id" for corresponding function . Beware about the put request as it needs
all the fields 

