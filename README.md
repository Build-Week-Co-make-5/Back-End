# Back-End BW PT Co-Make 5 

## On https://bw-pt-co-make5.herokuapp.com/


### POST api/auth/register

###### Username and password required in body:

```
{
	username: "lambda",
	password: "1234"
}
```
### POST api/auth/login

###### Username and password required:

```
{
	username: "lambda",
	password: "1234"
}
```

###### *Returns message, userId, and a JWT. Store this in the frontend client for use on authorization header. The token is set to expire in 5 days.*




