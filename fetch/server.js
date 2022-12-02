const express = require('express');
const app = express();
const PORT = 3000;

const cats = ['Jorts', 'Jean', 'Nyancat'];

app.use(express.static('./public'));

//eg1,2
// app.get('/', (req, res) => {
//     res.send('hello');
// })

app.get('/cats', (req, res) => {
    setTimeout(() => {
        // res.send(JSON.stringify(cats));
        res.json(cats);
    }, 1000);
    //eg2
    // res.send(JSON.stringify(
    //     {message: "you have cats",}
    // ));

    //eg1
    // setTimeout(() => {
    //     res.send('you have cats!');
    // });
});

app.get(('/dogs', (req, res) => {
    res.status(500).json({
        message: "Too much drool",
    });
}));

app.listen(PORT, () => console.log(`http://localhost:${PORT}`));

