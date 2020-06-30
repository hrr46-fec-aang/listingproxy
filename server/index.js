const express = require('express');
const path = require('path');
const bodyParser = require('body-parser');
const app = express();
// const cors = require('cors');


app.use(bodyParser.json());
// app.use(cors());
app.use('/:id', express.static(path.join(__dirname, '/../public/dist')));

app.get('/site/:id', function(req, res) {
  console.log('site id: ', req.params);

  // var siteID = req.params.id;
  // var query = Sites.where({id: siteID});
  // query.findOne(function(err, site) {
  //   if (err) {
  //     return err;
  //   }
  //   if (site) {
  //     console.log('site host:', site.host.name);
  //     res.send(site);
  //   } else {
  //     res.send('Not found');
  //   }
  // });

});

module.exports = app;