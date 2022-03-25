const express = require('express');
let app = express();
const { getReposByUsername } = require('../helpers/github');
var model = require('../database/mysql_model');
var db = require('../database/mysql_connect');


app.use(express.static(__dirname + '/../client/dist'));
app.use(express.json());

app.post('/repos', function (req, res) {

  var repoName = req.body.term;

  getReposByUsername(repoName)
    .then((repos) => {
      var reposArr = repos.data;
      model.post(reposArr, (err) => {
        if (err) {
          res.status(404).send('did not add to database')
        };
      })
    })
    .then(() => {
      res.sendStatus(201);
    })
    .catch((err) => {
      console.log('error at server/post: ', err);
      res.status(404).send('did not add to database')
    })

  // error handling?

  // This route should take the github username provided (req.body)
  // and get the repo information from the github API, then (res)
  // save the repo information in the database (add to schema/ mongo db)
});

app.get('/repos', function (req, res) {
  model.get((err, results) => {
    if (err) {
      res.status(404).send('did not connect to db')
    } else {
      // console.log('values in result object from model.get: ', Object.values(results));
      res.status(200).send(results);
    }
  });
});

let port = 1182;

app.listen(port, function () {
  console.log(`listening on port ${port}`);
});