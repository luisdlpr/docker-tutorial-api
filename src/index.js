const app = require('express')();

app.get('/', (req, res) => res.json({message: "hello world"}));

const port = process.env.PORT || 8000;

app.listen(port, () => console.log(`listening on ${port}`));
