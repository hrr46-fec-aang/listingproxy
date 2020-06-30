const app = require('./index.js');
const port = 3000;


app.listen(port, () => {
  console.log(`Proxy server running at: http://localhost:${port}/:id`);
});