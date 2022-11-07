"use strict";

import state from './state';
import {PAGES} from './constants';

const appEl = document.querySelector('#app');

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

export default render;