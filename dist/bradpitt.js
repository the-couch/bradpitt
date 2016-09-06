(function(f){if(typeof exports==="object"&&typeof module!=="undefined"){module.exports=f()}else if(typeof define==="function"&&define.amd){define([],f)}else{var g;if(typeof window!=="undefined"){g=window}else if(typeof global!=="undefined"){g=global}else if(typeof self!=="undefined"){g=self}else{g=this}g.bradpitt = f()}})(function(){var define,module,exports;return (function e(t,n,r){function s(o,u){if(!n[o]){if(!t[o]){var a=typeof require=="function"&&require;if(!u&&a)return a(o,!0);if(i)return i(o,!0);var f=new Error("Cannot find module '"+o+"'");throw f.code="MODULE_NOT_FOUND",f}var l=n[o]={exports:{}};t[o][0].call(l.exports,function(e){var n=t[o][1][e];return s(n?n:e)},l,l.exports,e,t,n,r)}return n[o].exports}var i=typeof require=="function"&&require;for(var o=0;o<r.length;o++)s(r[o]);return s})({1:[function(require,module,exports){
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

},{}]},{},[1])(1)
});