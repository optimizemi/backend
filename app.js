var koa = require('koa');
var bodyParser = require('koa-bodyparser');
var request = require('koa-request');
var pg = require('koa-pg');

var app = koa();

app.use(bodyParser());

app.use(pg(process.env.OPTIMIZE_DB));

app.use(function* (next) {
	//
	this.set('Access-Control-Allow-Origin', '*');
	//

	if (this.path !== '/teams') {
		return yield next;
	}

	var result = yield this.pg.db.client.query_('SELECT * FROM teams;');
	this.body = result.rows;
});


app.use(function* (next) {
	if (this.path !== '/newsletter') {
		return yield next;
	}

	this.body = this.request.body;
	var name = this.body.name.split(' ');

	var data = {
		email_address: this.body.email,
		status: 'subscribed',
		merge_fields: {
			FNAME: name[0],
			LNAME: name[1]
		}
	};

	var url = 'https://user:' + process.env.OPTIMIZE_MAILCHIMP_API_KEY
		+ '@us6.api.mailchimp.com/3.0/lists/'
		+ process.env.OPTIMIZE_MAILCHIMP_LIST_ID + '/members';

	var options = {
		url: url,
		body: data,
		json: true
	}

	var response = yield request.post(options);
	if (response.statusCode === 200) {
		this.body = 'Success';
	}
	else {
		this.status = response.statusCode;
		this.body = response.body.detail;
	}
});

app.listen(8080);
