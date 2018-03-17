const index = require('./index');

class Res {
    send(msg) {
        console.log('Sending message: ', msg);
        return this;
    }
    status(st) {
        console.log('Status: ', st);
        return this;
    }
    redirect(url) {
        console.log('Location: ' + url);
        return this;
    }
}

const req = {
    body: {},
    query: {
        href: 'http://www.imdb.com/title/tt0331080/'
    }
};
const res = new Res();

index.request(
    req,
    res,
);