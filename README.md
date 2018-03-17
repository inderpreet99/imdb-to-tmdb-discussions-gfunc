# iMDB to tMDB Discussions Google Function

This backend Google Function will automatically redirect the user to the tMDB movie that matches iMDB title link.

## Deploy

```
yarn install
gcloud beta functions deploy imdb-discussions --source=gfunc
```

## Invoke

```
curl "https://us-central1-imdb-discussions.cloudfunctions.net/imdb-discussions?href=http://www.imdb.com/title/tt2407380/"
```

### Logs

```
gcloud beta functions deploy imdb-discussions --entry-point=request --source=imdb-to-tmdb-discussions-gfunc
```


