/******/ (() => { // webpackBootstrap
/******/ 	"use strict";
/******/ 	var __webpack_modules__ = ({

/***/ "./src/constants.js":
/*!**************************!*\
  !*** ./src/constants.js ***!
  \**************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "PAGES": () => (/* binding */ PAGES)
/* harmony export */ });


//like enum
const PAGES = {
    TODOS: 'todos',
    CAT: 'cat',
};





/***/ }),

/***/ "./src/state.js":
/*!**********************!*\
  !*** ./src/state.js ***!
  \**********************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _constants__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./constants */ "./src/constants.js");

//expended state
const state = {
    todos: [
        { task: 'Nap', done: false },
        { task: 'Knock stuff down', done: true },
        { task: 'Eat', done: false },
    ],
    page: _constants__WEBPACK_IMPORTED_MODULE_0__.PAGES.TODOS,
};

/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (state);

/***/ })

/******/ 	});
/************************************************************************/
/******/ 	// The module cache
/******/ 	var __webpack_module_cache__ = {};
/******/ 	
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/ 		// Check if module is in cache
/******/ 		var cachedModule = __webpack_module_cache__[moduleId];
/******/ 		if (cachedModule !== undefined) {
/******/ 			return cachedModule.exports;
/******/ 		}
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = __webpack_module_cache__[moduleId] = {
/******/ 			// no module.id needed
/******/ 			// no module.loaded needed
/******/ 			exports: {}
/******/ 		};
/******/ 	
/******/ 		// Execute the module function
/******/ 		__webpack_modules__[moduleId](module, module.exports, __webpack_require__);
/******/ 	
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/ 	
/************************************************************************/
/******/ 	/* webpack/runtime/define property getters */
/******/ 	(() => {
/******/ 		// define getter functions for harmony exports
/******/ 		__webpack_require__.d = (exports, definition) => {
/******/ 			for(var key in definition) {
/******/ 				if(__webpack_require__.o(definition, key) && !__webpack_require__.o(exports, key)) {
/******/ 					Object.defineProperty(exports, key, { enumerable: true, get: definition[key] });
/******/ 				}
/******/ 			}
/******/ 		};
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/hasOwnProperty shorthand */
/******/ 	(() => {
/******/ 		__webpack_require__.o = (obj, prop) => (Object.prototype.hasOwnProperty.call(obj, prop))
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/make namespace object */
/******/ 	(() => {
/******/ 		// define __esModule on exports
/******/ 		__webpack_require__.r = (exports) => {
/******/ 			if(typeof Symbol !== 'undefined' && Symbol.toStringTag) {
/******/ 				Object.defineProperty(exports, Symbol.toStringTag, { value: 'Module' });
/******/ 			}
/******/ 			Object.defineProperty(exports, '__esModule', { value: true });
/******/ 		};
/******/ 	})();
/******/ 	
/************************************************************************/
var __webpack_exports__ = {};
// This entry need to be wrapped in an IIFE because it need to be isolated against other modules in the chunk.
(() => {
/*!*********************!*\
  !*** ./src/site.js ***!
  \*********************/
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _constants__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./constants */ "./src/constants.js");
/* harmony import */ var _state__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./state */ "./src/state.js");





(function() {
    const appEl = document.querySelector('#app');
    
    appEl.addEventListener('click', (event) => {
        if(event.target.classList.contains('todo')) {
            const index = event.target.dataset.index;
            _state__WEBPACK_IMPORTED_MODULE_1__["default"].todos[index].done = !_state__WEBPACK_IMPORTED_MODULE_1__["default"].todos[index].done;
            render();
            return;
        } 
        
        if (event.target.classList.contains('to-delete')) {
            const index = event.target.dataset.index;
            _state__WEBPACK_IMPORTED_MODULE_1__["default"].todos.splice(index, 1);
            render();
            return;
        }

        if (event.target.classList.contains('page')) {
            _state__WEBPACK_IMPORTED_MODULE_1__["default"].page = event.target.dataset.target;
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
        _state__WEBPACK_IMPORTED_MODULE_1__["default"].todos.push({task, done: false});
        taskEl.value = '';
        render();
    });


    //define a function called render
    function render() {
        if (_state__WEBPACK_IMPORTED_MODULE_1__["default"].page === _constants__WEBPACK_IMPORTED_MODULE_0__.PAGES.TODOS) {
            renderTodos();
            return;
        }

        if (_state__WEBPACK_IMPORTED_MODULE_1__["default"].page === _constants__WEBPACK_IMPORTED_MODULE_0__.PAGES.CAT) {
            renderCat();
            return;
        }
    }

    function renderTodos() {
        const listHtml = _state__WEBPACK_IMPORTED_MODULE_1__["default"].todos.map( (todo, index) => {
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



})();

/******/ })()
;
//# sourceMappingURL=bundle.js.map