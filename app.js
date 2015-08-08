var koa = require('koa');
var app = koa();

app.use(function* (next) {
        //
        this.set('Access-Control-Allow-Origin', '*');
        //

        if (this.path !== '/teams') {
                return yield next;
        }

        this.body = [ {name: "Awaken", image: "https://www.optimizemichigan.org/imgs/mentor.jpg"},
                      {name: "Adapt", image: "https://www.optimizemichigan.org/imgs/student_why_not_me.png"}
                    ];
});

app.listen(8080);
