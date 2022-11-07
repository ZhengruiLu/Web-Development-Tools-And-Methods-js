"use strict";

import {PAGES} from './constants';
import state from './state';

(function() {
    const appEl = document.querySelector('#app');
    
    appEl.addEventListener('click', (event) => {
        if(event.target.classList.contains('todo')) {
            const index = event.target.dataset.index;
            state.todos[index].done = !state.todos[index].done;
            render();
            return;
        } 
        
        if (event.target.classList.contains('to-delete')) {
            const index = event.target.dataset.index;
            state.todos.splice(index, 1);
            render();
            return;
        }

        if (event.target.classList.contains('page')) {
            state.page = event.target.dataset.target;
            render();
            return;
        }
        //show the index
        // console.log('Click', event.target.dataset.index);

        //show the tag name
        // console.log('Click', event.target.nodeName);

        //make it complete
        // event.target.classList.toggle('complete');
    });

    // const addTaskFormEl = document.querySelector('.add-task');
    
    appEl.addEventListener('submit', (event) => {
        // cancel the e if this e is cancelable
        event.preventDefault();
        // add new task
        const taskEl = document.querySelector('.task');
        const task = taskEl.value;
        state.todos.push({task, done: false});
        taskEl.value = '';
        render();
    });


    //define a function called render
    function render() {
        if (state.page === PAGES.TODOS) {
            renderTodos();
            return;
        }

        if (state.page === PAGES.CAT) {
            renderCat();
            return;
        }
    }

    function renderTodos() {
        const listHtml = state.todos.map( (todo, index) => {
            const doneClass = todo.done ? "complete" : "";
            return `
            <li>
                <span class="todo ${doneClass}" data-index="${index}">${todo.task}</span>
                <button data-index="${index}" type="button" class="to-delete">X</button> 
            </li>
            `;
        }).join('');

        const html = `
            <ul class="todos">${listHtml}</ul>
            <form class="add-task" action="" method="GET">
                <label>
                    New task
                    <input class="task" name="task">
                </label>
                <button type="submit" class="add">Add</button>
            </form>
            <button type="button" class="page" data-target="cat">
                Go to Cat
            </button>
        `

        appEl.innerHTML = html;
    }

    function renderCat() {
        appEl.innerHTML = `
            <img
            src="http://placekitten.com/300/300"
            alt="a random cat"
            >
            <button type="button" class="page" data-target="todos">
                Go to Todos
            </button>
        `
    }

    //call render
    render();
})();


