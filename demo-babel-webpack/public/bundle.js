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
var PAGES = {
  TODOS: 'todos',
  CAT: 'cat'
};

/***/ }),

/***/ "./src/render.js":
/*!***********************!*\
  !*** ./src/render.js ***!
  \***********************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _state__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./state */ "./src/state.js");
/* harmony import */ var _constants__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./constants */ "./src/constants.js");




var appEl = document.querySelector('#app');

//define a function called render
function render() {
  if (_state__WEBPACK_IMPORTED_MODULE_0__["default"].page === _constants__WEBPACK_IMPORTED_MODULE_1__.PAGES.TODOS) {
    renderTodos();
    return;
  }
  if (_state__WEBPACK_IMPORTED_MODULE_0__["default"].page === _constants__WEBPACK_IMPORTED_MODULE_1__.PAGES.CAT) {
    renderCat();
    return;
  }
}
function renderTodos() {
  var listHtml = _state__WEBPACK_IMPORTED_MODULE_0__["default"].todos.map(function (todo, index) {
    var doneClass = todo.done ? "complete" : "";
    return "\n        <li>\n            <span class=\"todo ".concat(doneClass, "\" data-index=\"").concat(index, "\">").concat(todo.task, "</span>\n            <button data-index=\"").concat(index, "\" type=\"button\" class=\"to-delete\">X</button> \n        </li>\n        ");
  }).join('');
  var html = "\n        <ul class=\"todos\">".concat(listHtml, "</ul>\n        <form class=\"add-task\" action=\"\" method=\"GET\">\n            <label>\n                New task\n                <input class=\"task\" name=\"task\">\n            </label>\n            <button type=\"submit\" class=\"add\">Add</button>\n        </form>\n        <button type=\"button\" class=\"page\" data-target=\"cat\">\n            Go to Cat\n        </button>\n    ");
  appEl.innerHTML = html;
}
function renderCat() {
  appEl.innerHTML = "\n        <img\n        src=\"http://placekitten.com/300/300\"\n        alt=\"a random cat\"\n        >\n        <button type=\"button\" class=\"page\" data-target=\"todos\">\n            Go to Todos\n        </button>\n    ";
}
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (render);

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
var state = {
  todos: [{
    task: 'Nap',
    done: false
  }, {
    task: 'Knock stuff down',
    done: true
  }, {
    task: 'Eat',
    done: false
  }],
  page: _constants__WEBPACK_IMPORTED_MODULE_0__.PAGES.TODOS
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
/* harmony import */ var _render__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./render */ "./src/render.js");





(function () {
  var appEl = document.querySelector('#app');
  appEl.addEventListener('click', function (event) {
    if (event.target.classList.contains('todo')) {
      var index = event.target.dataset.index;
      _state__WEBPACK_IMPORTED_MODULE_1__["default"].todos[index].done = !_state__WEBPACK_IMPORTED_MODULE_1__["default"].todos[index].done;
      (0,_render__WEBPACK_IMPORTED_MODULE_2__["default"])();
      return;
    }
    if (event.target.classList.contains('to-delete')) {
      var _index = event.target.dataset.index;
      _state__WEBPACK_IMPORTED_MODULE_1__["default"].todos.splice(_index, 1);
      (0,_render__WEBPACK_IMPORTED_MODULE_2__["default"])();
      return;
    }
    if (event.target.classList.contains('page')) {
      _state__WEBPACK_IMPORTED_MODULE_1__["default"].page = event.target.dataset.target;
      (0,_render__WEBPACK_IMPORTED_MODULE_2__["default"])();
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

  appEl.addEventListener('submit', function (event) {
    // cancel the e if this e is cancelable
    event.preventDefault();
    // add new task
    var taskEl = document.querySelector('.task');
    var task = taskEl.value;
    _state__WEBPACK_IMPORTED_MODULE_1__["default"].todos.push({
      task: task,
      done: false
    });
    taskEl.value = '';
    (0,_render__WEBPACK_IMPORTED_MODULE_2__["default"])();
  });

  //call render
  (0,_render__WEBPACK_IMPORTED_MODULE_2__["default"])();
})();
})();

/******/ })()
;
//# sourceMappingURL=bundle.js.map