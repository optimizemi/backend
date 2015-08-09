var teams = {
	all: function*() {
		this.set('Access-Control-Allow-Origin', '*');

		var result = yield this.pg.db.client.query_('SELECT * FROM teams;');
		this.body = result.rows;
	},

	year: function*(year) {
		this.set('Access-Control-Allow-Origin', '*');

		var result = yield this.pg.db.client.query_('SELECT * FROM teams WHERE year = ' + year);
		this.body = result.rows;
	},

	id: function* (id) {
		this.set('Access-Control-Allow-Origin', '*');

		var result = yield this.pg.db.client.query_('SELECT * FROM teams WHERE id = ' + id);
		this.body = result.rows;
	}
};

module.exports = teams;
