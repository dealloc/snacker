(function webpackUniversalModuleDefinition(root, factory) {
	if(typeof exports === 'object' && typeof module === 'object')
		module.exports = factory();
	else if(typeof define === 'function' && define.amd)
		define([], factory);
	else if(typeof exports === 'object')
		exports["snacker"] = factory();
	else
		root["snacker"] = factory();
})(this, function() {
return /******/ (function(modules) { // webpackBootstrap
/******/ 	// The module cache
/******/ 	var installedModules = {};
/******/
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/
/******/ 		// Check if module is in cache
/******/ 		if(installedModules[moduleId]) {
/******/ 			return installedModules[moduleId].exports;
/******/ 		}
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = installedModules[moduleId] = {
/******/ 			i: moduleId,
/******/ 			l: false,
/******/ 			exports: {}
/******/ 		};
/******/
/******/ 		// Execute the module function
/******/ 		modules[moduleId].call(module.exports, module, module.exports, __webpack_require__);
/******/
/******/ 		// Flag the module as loaded
/******/ 		module.l = true;
/******/
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/
/******/
/******/ 	// expose the modules object (__webpack_modules__)
/******/ 	__webpack_require__.m = modules;
/******/
/******/ 	// expose the module cache
/******/ 	__webpack_require__.c = installedModules;
/******/
/******/ 	// identity function for calling harmony imports with the correct context
/******/ 	__webpack_require__.i = function(value) { return value; };
/******/
/******/ 	// define getter function for harmony exports
/******/ 	__webpack_require__.d = function(exports, name, getter) {
/******/ 		if(!__webpack_require__.o(exports, name)) {
/******/ 			Object.defineProperty(exports, name, {
/******/ 				configurable: false,
/******/ 				enumerable: true,
/******/ 				get: getter
/******/ 			});
/******/ 		}
/******/ 	};
/******/
/******/ 	// getDefaultExport function for compatibility with non-harmony modules
/******/ 	__webpack_require__.n = function(module) {
/******/ 		var getter = module && module.__esModule ?
/******/ 			function getDefault() { return module['default']; } :
/******/ 			function getModuleExports() { return module; };
/******/ 		__webpack_require__.d(getter, 'a', getter);
/******/ 		return getter;
/******/ 	};
/******/
/******/ 	// Object.prototype.hasOwnProperty.call
/******/ 	__webpack_require__.o = function(object, property) { return Object.prototype.hasOwnProperty.call(object, property); };
/******/
/******/ 	// __webpack_public_path__
/******/ 	__webpack_require__.p = "";
/******/
/******/ 	// Load entry module and return exports
/******/ 	return __webpack_require__(__webpack_require__.s = 1);
/******/ })
/************************************************************************/
/******/ ([
/* 0 */
/***/ (function(module, exports) {

// removed by extract-text-webpack-plugin

/***/ }),
/* 1 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
	value: true
});

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

__webpack_require__(0);

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

var CONTAINER_ID = 'snackbar-container';
var SNACKBAR_ID = 'snackbar';
var ACTION_ID = 'snackbar-action';
var DEFAULT_OPTIONS = {
	type: 'info',
	duration: 3000
};

var Snackbar = function () {
	function Snackbar() {
		_classCallCheck(this, Snackbar);

		this.container = null;
		this.snackbar = null;
		this.button = null;
		this.queue = [];
		this.active = false;

		this.createContainer();
		this.createSnackbar();
		this.createButton();
	}

	_createClass(Snackbar, [{
		key: 'createContainer',
		value: function createContainer() {
			this.container = document.createElement('div');
			this.container.setAttribute('id', CONTAINER_ID);
			document.body.appendChild(this.container);
		}
	}, {
		key: 'createSnackbar',
		value: function createSnackbar() {
			this.snackbar = document.createElement('div');
			this.snackbar.setAttribute('id', SNACKBAR_ID);
			this.container.appendChild(this.snackbar);
		}
	}, {
		key: 'createButton',
		value: function createButton() {
			this.button = document.createElement('button');
			this.button.setAttribute('id', ACTION_ID);
		}
	}, {
		key: 'show',
		value: function show(text) {
			var _this = this;

			var options = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : DEFAULT_OPTIONS;

			if (this.active) {
				this.queue.unshift({ text: text, options: options });
				return;
			}

			this.active = true;
			this.snackbar.innerHTML = text;
			if (options.action !== undefined) {
				this.button.innerText = options.action.text;
				this.button.onclick = options.action.handler;
				this.snackbar.appendChild(this.button);
			}
			this.snackbar.setAttribute('class', ''); // clear all classes
			this.snackbar.classList.add('active', options.type);
			setTimeout(function () {
				_this.snackbar.classList.remove('active');
				if (_this.queue.length !== 0) {
					var queued = _this.queue.pop();
					setTimeout(function () {
						return _this.show(queued.text, queued.options);
					}, 520); // wait for fadeout
					_this.active = false;
				}
			}, options.duration);
		}
	}]);

	return Snackbar;
}();

exports.default = Snackbar;

/***/ })
/******/ ]);
});