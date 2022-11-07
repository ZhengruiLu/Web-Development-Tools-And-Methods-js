"use strict";

import {PAGES} from './constants';
import state from './state';
import render from './render';

(function() {
    const appEl = document.querySelector('#app');
    
    appEl.addEventListener('click', (event) => {
        if(event.target.classList.contains('todo')) {
            const index = event.target.dataset.index;
            // state.toggleTodo(index);
            state.todos[index].done = !state.todos[index].done;
        
            render(state, appEl);
            return;
        } 
        
        if (event.target.classList.contains('to-delete')) {
            const index = event.target.dataset.index;
            // state.deleteTodo(index);
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


    

    //call render
    render();
})();


