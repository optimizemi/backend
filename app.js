// Packages
var koa = require('koa');
var bodyParser = require('koa-bodyparser');
var pg = require('koa-pg');
var route = require('koa-route');

// Files
var teams = require('./teams'); // /api/teams routes
var newsletter = require('./newsletter'); // /api/newsletter route

var app = koa();

// Middleware
app.use(bodyParser()); // JSON request parser
app.use(pg(process.env.OPTIMIZE_DB)); // PostgreSQL interface

// Routes
app.use(route.get('/teams', teams.all));
app.use(route.get('/teams/id/:id', teams.id));
app.use(route.get('/teams/year/:year', teams.year));
app.use(route.post('/newsletter', newsletter));

// Starting the app
app.listen(8080);
