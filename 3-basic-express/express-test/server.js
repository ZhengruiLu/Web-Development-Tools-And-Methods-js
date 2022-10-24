const express = require('express');
const app = express();

// add obj
const catStatus = {
    Jorts: 'in trash bin',
    Jean: 'opening closet',
    Nyan: 'flying high',
};

const cats = {
    Jorts: {
        isTabby: false,
    },
    Jean: {
        isTabby: true,
    },
};

// use for display the doc root content
app.use(express.static('./public'));

// call callback, pass request and response, decide response
app.get('/dynamic.html', (request, response) => {
    response.send('This is not an actual file');
});

app.get('/lookup', (req, res) => {
    //add dynamic response
    const { cat } = req.query;
    const activity = catStatus[cat] || 'cat cannot found';
    res.send(activity);
    // default
    // console.log(req.query);
    // res.send('received');
});

function catList() {
    return Object.keys(cats).map(cat => `
        <li>
            ${cat}
            ${cats[cat].isTabby ? 'is': 'is NOT'} a Tabby
        </li>
    `).join('\n');
}

app.get('/cats', (req, res) => {
    res.send(
        `
        <html>
            <head><title>Cat Results</title></head>
            <body>
                <ul>
                    ${catList()}
                </ul>   
            </body>
        </html>
        `
    );
});

// add post
app.post('/cats', express.urlencoded({extended: false}), (req, res) => {
    // destruct data
    const {name, isTabby} = req.body;
    // modify according to obj
    cats[name] = {
        isTabby,
    };

    res.redirect('cats/');
    
    // default
    // console.log(req.body);
    // res.send('got it');
});

// using express library
// listen to a port
// each request passes through a series of checks
// callback will decide to send response, and what to send, 
// and if to pass on to more checks
app.listen(8080, () => {
    console.log('listen on http://localhost:8080/');
});
