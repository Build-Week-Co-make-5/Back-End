# Back-End BW PT Co-Make 5 

## On https://bw-pt-co-make5.herokuapp.com/


### POST api/auth/register

Username and password required in body:

```
{
	username: "lambda",
	password: "1234"
}
```
### POST api/auth/login

Username and password required:

```
{
	username: "lambda",
	password: "1234"
}
```

###### *Returns message, username, and a JWT. Store this in the frontend client for use on authorization header. The token is set to expire in 5 days.*

```
{
    "username": "test app 1",
    "token": "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ1c2VyaWQiOjcsInVzZXJuYW1lIjoidGVzdCBhcHAgMSIsImlhdCI6MTU4MzE5Mjc0OSwiZXhwIjoxNTgzNjI0NzQ5fQ.0i37Rp44HA5CgPBqvP6dO4od1xEYb--yidJyf9ig9g4"
}
```


### POST api/issues

Returns a list of all issues

```
"message": "testing",
    "issue": [
        {
            "id": 1,
            "created_at": "2020-03-03T01:21:05.653Z",
            "updated_at": "2020-03-03T01:21:05.653Z",
            "issue_name": "Pothole",
            "issue_location": "8207 High Ridge Circle",
            "category": "roads",
            "priority": "high",
            "imgURL": "https://unsplash.com/photos/-OOiAy2lBZc",
            "issue_details": "I asked Domino's to come fix it but they said they're not doing that in our state yet.",
            "user_id": null
        },
        {
            "id": 2,
            "created_at": "2020-03-03T01:21:05.653Z",
            "updated_at": "2020-03-03T01:21:05.653Z",
            "issue_name": "Debris on sidewalk",
            "issue_location": "7723 South Lane",
            "category": "debris",
            "priority": "low",
            "imgURL": "https://unsplash.com/photos/ATsfZ_x8lZg",
            "issue_details": "There are sticks and leaves all over the sidewalk here",
            "user_id": null
        },
        {
            "id": 3,
            "created_at": "2020-03-03T01:21:05.653Z",
            "updated_at": "2020-03-03T01:21:05.653Z",
            "issue_name": "Overgrown Grass",
            "issue_location": "Park on Myrtle Ave",
            "category": "landscape",
            "priority": "low",
            "imgURL": "https://unsplash.com/photos/h2i3A8SuKkw",
            "issue_details": "The grass at this playground is getting out of control! Please schedule it to be mowed ASAP",
            "user_id": null
        },

```





