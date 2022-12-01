const express = require('express');
const app = express();
const PORT = 3000;

app.get('/cats', (req, res) => {
    setTimeout(() => {
        res.send('you have cats!');
    });
});

app.listen(PORT, () => console.log(`http://localhost:${PORT}`));

