# React Movie - React Flux GraphQL

To start we assume that you have these modules installed globally:
```
npm install babel webpack -g
```
Then do the following:
```
npm install
```

You need to provide your own API key for themoviedb.com API service

Then you need to manually create a KEYS.js file in the ./src/utils directory.

example:

```
let KEYS = {
  API_KEY: "YOUR KEY HERE"
}

export default KEYS;
```

<img
  alt="react-movie"
  src="https://paul.li/box/img/react-movie.jpg"
  width="100%"
/>


Lastly do the following in two different terminal sessions:

To start the node server
```
npm start
```

To run webpack and watch for updates to re-build
```
npm run devbuild
```
You should have a dev server running on port 8888.

Open your browser and go to http://localhost:8888

To play with the GraphiQL go to http://localhost:8888/graphql
