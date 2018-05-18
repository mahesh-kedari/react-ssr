const express = require('express'),
  {matchPath} = require('react-router-dom'),
  app = express(),
  template = require('./views/template'),
  path = require('path'),
  renderToString = require('react-dom/server')
  //routes = require('./src/routes');

// Serving static files
app.use('/assets', express.static(path.resolve(__dirname, 'assets')));
app.use('/media', express.static(path.resolve(__dirname, 'media')));

// hide powered by express app.disable('x-powered-by'); start the server
app.listen(process.env.PORT || 3000);

// our apps data model
const photos = require('./server/data/photos.js');

let initialState = {
  isFetching: false,
  photos: photos
}

//SSR function import
const ssr = require('./views/server');

// server rendered home page
app.get('/', (req, res) => {
  /*const activeRoute = routes.find(
    (route) => matchPath(req.url, route)
  );
  const promise = activeRoute.fetchInitialData
    ? activeRoute.fetchInitialData(req.path)
    : Promise.resolve();


  /*promise.then((data) => {
    const markup = renderToString(
      <App />
    );
  }).catch(next)*/

  const {preloadedState, content} = ssr(initialState)
  const response = template("Server Rendered Page", preloadedState, content)
  res.setHeader('Cache-Control', 'assets, max-age=604800')
  res.send(response);
});

// tiny trick to stop server during local development

app.get('/exit', (req, res) => {
  if (process.env.PORT) {
    res.send("Sorry, the server denies your request")
  } else {
    res.send("shutting down")
    process.exit(0)
  }

});
