optiMize Michigan Backend 
=========================
* This backend will be written in Koa, a framework very similar to Express
* Its purpose is essentially to serve data from a MySQL database such as teams, etc.

## API spec
### Teams
`GET /api/teams`
```
{
	id: 17,
	year: 2015,
	name: "My Team",
	description: "Description about team for profile or similar",
	logo: "Link to logo",
	website: "Link to team website"
}
`GET /api/teams/year/2015` - Returns all teams matching the `year=2015` constraint
`GET /api/teams/id/17` - Returns the team matching the `id=17` constraint
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
