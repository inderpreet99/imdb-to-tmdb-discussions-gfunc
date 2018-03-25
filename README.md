# iMDB to tMDB Discussions Google Function

This backend Google Function will automatically redirect the user to the tMDB movie that matches iMDB title link in parameter.

## Deploy

```
yarn install
cp ../secrets.json ./ # OR populate your secrets file with tMDB API key
gcloud beta functions deploy imdb-discussions --entry-point=request --source=./
```

## Invoke

Example:
```
curl "https://us-central1-imdb-discussions.cloudfunctions.net/imdb-discussions?href=http://www.imdb.com/title/tt2407380/"
```

### Logs

```
gcloud beta functions logs read imdb-discussions
```


