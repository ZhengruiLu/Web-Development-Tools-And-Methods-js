"use strict";

(function() {
    let names = [];
    const connectEl = document.querySelector('.connect');

    connectEl.addEventListener('click', () => {
        updateCats();
    });

    const listEl = document.querySelector('.example');
    const status = document.querySelector('.status');

    function updateCats() {
        listEl.innerHTML = ''; //empty the content

        fetch('/cats')
        .catch(() => Promise.reject({error: 'network'}))
        .then(response => {
            if(response.ok) {return response.json();}
            //this example service sends JSON error bodies
            return response.json().then(err => Promise.reject(err));
        })
        .then(cats => {
            names = cats;
            render();
        })
        .catch(err => status.innerText = err.error);

        // fetch('/dogs')
        // .catch(() => {
        //     console.log('network error');
        //     return Promise.reject('poop');
        // })
        // .then( response => {
        //     if (response.ok) {
        //         return response.json();
        //     }
        //     console.log('Not ok', response.status);
        //     return Promise.reject('drool');
        // })
        // .then( response => response.json() )
        // .then( cats => {
        //     names = cats; // update state
        //     render();//show the state again
        // });

        // fetch('/cats')
        // .catch(() => {
        //     console.log('network error');
        //     return Promise.reject('poop');
        // })
        // .then( response => response.json() )
        // .then( cats => {
        //     names = cats; // update state
        //     render();//show the state again
        // });
    }

    function render() {
        listEl.innerHTML = names.map(
            name => `<li>${name}</li>`
        ).join('')
    }
    //basic design
    // const list = document.querySelector('.example');

    // fetch('/cats')
    // .then( response => response.json() )
    // .then( cats => {
    //     const names = cats.map(
    //     name => `<li>${name}</li>`
    //     ).join('')
    //     list.innerHTML = names;
    // });
})();
