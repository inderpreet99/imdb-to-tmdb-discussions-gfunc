const axios = require('axios');

const TMDB_API_KEY = '';

/**
 * Responds to any HTTP request that can provide a "message" field in the body.
 *
 * @param {!Object} req Cloud Function request context.
 * @param {!Object} res Cloud Function response context.
 */
exports.request = (req, res) => {
    if (req.query.href && req.query.href.indexOf('imdb') >= 0) {
        const iMDBId = getIMDBId(req.query.href);
        // res.status(400).send('imdb: ' + iMDBId);
        sendResp(res, iMDBId);
    } else {
        res.status(400).send('No message defined!');
    }
};

const getIMDBId = (url) => {
    const matches = url.match(/tt[0-9]+/)
    if (matches && matches.length > 0) {
        return matches[0];
    }
    return false;
}

const sendResp = (res, iMDBId) => {

    axios.get('https://api.themoviedb.org/3/find/' + iMDBId + '?TMDB_api_key=' + TMDB_API_KEY + '&external_source=imdb_id').then((output) => {
        const movies = output.data.movie_results;
        if (movies.length < 1) {
            res.status(400).send('No movie found!');
        } else {
            const movie = movies[0];
            res.redirect('https://themoviedb.org/movie/' + movie.id + '/discuss');
        }
    });
}