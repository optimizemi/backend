var request = require('koa-request');

var newsletter = function* (next) {
    this.body = this.request.body;
    this.set('Access-Control-Allow-Origin', '*');

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
	this.body = {status: 'success',
		     data: data};
    }
    else {
	this.status = response.statusCode;
	this.body = {status: 'error',
		     message: response.body.detail};
    }
}

module.exports = newsletter;
