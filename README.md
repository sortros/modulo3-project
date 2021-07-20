## Instructions how to start

create `.env` file like the example `.env.sample`

start with `npm run start-dev`

**http://localhost:5000**

# Project's name: 
​
Netflix clone?
​
## Description
​
Netflix clone is an atempt to clone Netflix.
​
## USER STORIES (MVP)
​
**404** - As a user I want to see a nice 404 page when I go to a page that doesn’t exist so that I know it was my fault
​
**500** - As a user I want to see a nice error page when the super team screws it up so that I know that is not my fault
​
**Landing page** - As a user I want to be able to access the landing page so that I see what the app is about and login and signup
​
**Sign up** - As a user I want to be able to create an account to use the app and see movies
​
**Login** - As a user I want to be able to log in on the webpage 
​
**Logout** - As a user I want to be able to log out from the webpage
​
**Profile** - As a user I want to be able to see my profile and edit it
​

​
## BACKLOG
​
**filter** - Filter the movies (action, drama, terror)

​
​
## ROUTES
​
| Name            | Method | Endpoint                      | Description                                      | Body                                  |        |
| --------------- | ------ | ----------------------------- | ------------------------------------------------ | ------------------------------------- | --------------- |
| Home           | GET    | /home                            | See all the movies preview                             |                                       |                 |
| Sign up    | POST   | /signup                        | Sign up a user with an account                          | { mail, username, password }                                   |              |
| Log in          | POST   | /login                        | Log in the user                                  | { mail, password }                      |            |
| Logout   | GET    | /logout                            | Logout a user                       |                                       |  |
​
​
​
## MODELS
​
Todo model
​
```js
{
    title: String,
    description: String
}
```
​
User model
​
```js
{
    username: String,
    email: String,
    hashedPassword: String,
    tasks: [{ type: Schema.Types.ObjectId, ref: 'Todo' }]
}
```
​
## LINKS
​
### Github project
​
- [Frontend project]()
- [Backend project]()
​
### Deploy links
​
- [Frontend deploy]()
​
### Project kanban
- [Github projects]()
​
### Wireframes 
​
- [InVision with Wireframes]()
​
### Slides
​
- [Slides]()
