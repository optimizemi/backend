optiMize Michigan Backend 
=========================
* This backend will be written in Koa, a framework very similar to Express
* Its purpose is essentially to serve data from a MySQL database such as teams, etc.

## Draft API spec
### Teams
`GET /teams`
```
{
	id: team_id,
	year: team_year,
	name: "Team_Name",
	members: ["Member_1", "Member_2", ...],
	short_desc: "Short description about team for team listing"
	description: "Longer description about team for profile or similar",
	photo: "Link to team photo"
}
```

## For the future
### Users
`GET /users`
```
{
	id: user_id,
	name: "John Smith",
	email: "jsmith@umich.edu",
	phone: "1234567890",
	description: "Profile description about John",
	isStudent: true,
	isMentor: false
}
```

### Mentors
`GET /mentors - Contains only mentors from user list`
```
{
	user_id: user_id_for_mentor,
	interests: ["interest_1", "interest_2"],
	tags: ["tag_1", "tag_2"]
	schedule: "mentor_schedule"
}
```
