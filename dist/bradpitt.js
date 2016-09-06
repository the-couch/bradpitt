/******/ (function(modules) { // webpackBootstrap
/******/ 	// The module cache
/******/ 	var installedModules = {};
/******/
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/
/******/ 		// Check if module is in cache
/******/ 		if(installedModules[moduleId])
/******/ 			return installedModules[moduleId].exports;
/******/
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = installedModules[moduleId] = {
/******/ 			exports: {},
/******/ 			id: moduleId,
/******/ 			loaded: false
/******/ 		};
/******/
/******/ 		// Execute the module function
/******/ 		modules[moduleId].call(module.exports, module, module.exports, __webpack_require__);
/******/
/******/ 		// Flag the module as loaded
/******/ 		module.loaded = true;
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
/******/ 	// __webpack_public_path__
/******/ 	__webpack_require__.p = "";
/******/
/******/ 	// Load entry module and return exports
/******/ 	return __webpack_require__(0);
/******/ })
/************************************************************************/
/******/ ([
/* 0 */
/***/ function(module, exports) {

	'use strict';
	
	Object.defineProperty(exports, "__esModule", {
	  value: true
	});
	
	var _typeof = typeof Symbol === "function" && typeof Symbol.iterator === "symbol" ? function (obj) { return typeof obj; } : function (obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol ? "symbol" : typeof obj; };
	
	var isObj = function isObj(o) {
	  return o !== null && 'object' === (typeof o === 'undefined' ? 'undefined' : _typeof(o)) && !('nodeType' in o);
	};
	
	var returnSize = function returnSize(el, type) {
	  var isWindow = el !== null && el.window ? true : false;
	
	  if (isWindow) {
	    return Math.max(el['outer' + type], document.documentElement['client' + type]);
	  }
	
	  return Math.max(el['offset' + type], el['client' + type]);
	};
	
	var returnPosition = function returnPosition() {
	  if (window.pageYOffset !== undefined) {
	    return window.pageYOffset;
	  } else {
	    return (document.documentElement || document.body.parentNode || document.body).scrollTop;
	  }
	};
	
	var returnScroll = function returnScroll() {
	  return window.scrollY || window.pageYOffset;
	};
	
	/**
	 * @param {string} type Either 'parallax', or 'mousemove'
	 * @param {object} el Required dom element
	 * @param {...array} args Optional args
	 */
	
	var bradpitt = function bradpitt(type, el) {
	  var isParallax = type === 'parallax' ? true : false;
	
	  var instance = Object.create({
	    init: function init() {
	      console.log('les guac');
	    }
	  });
	};
	
	exports.default = {
	  parallax: function parallax(el, options) {
	    return bradpitt('parallax', el, options);
	  }
	};

/***/ }
/******/ ]);
//# sourceMappingURL=bradpitt.js.map