import {PAGES} from './constants';
//expended state
const state = {
    todos: [
        { task: 'Nap', done: false },
        { task: 'Knock stuff down', done: true },
        { task: 'Eat', done: false },
    ],
    page: PAGES.TODOS,
};

export default state;