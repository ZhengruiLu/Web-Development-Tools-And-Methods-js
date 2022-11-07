const express = require('express');
const app = express();

const PORT = 3000;

app.use(express.static('./public'));

app.get('/cat', (req, res) => {
    res.send('cat');
});

app.listen(PORT, () => console.log(`http://localhost:${PORT}/`));