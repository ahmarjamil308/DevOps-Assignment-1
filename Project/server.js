const express = require('express');
const path = require('path');
const app = express();

app.use(express.static(path.join(__dirname, 'Project')));

app.get('/abc', (req, res) => {
  res.render(res,req,) 
});

app.listen(2701, () => {
  console.log('Server is running on http://localhost:2701');
});
