const express = require('express');
const bodyParser = require('body-parser');
const json2xls = require('json2xls');
const fs = require('fs');

const app = express();

app.use(
  bodyParser.json()
);

app.use(
  bodyParser.urlencoded({
    extended: false,
  })
);

app.post('/send-data', (req, res) => {
  /* Generate excel */
  const xls = json2xls(req.body);
  const id = Math.round(Math.random() * 1000000);
  fs.writeFileSync(`uploads/data-${id}.xlsx`, xls, 'binary');

  return res.sendFile(`data-${id}.xlsx`, { root: 'uploads/' }, function(err) {
    if (err) {
      console.log(err);
    } else {
      console.log('Sent:', fileName);
    }
  });
});

app.use(express.static(__dirname + '/public'));

app.listen(3000, () => {
  console.log("App listening at port 3000");
})
