# BradPitt.js  [![npm](https://img.shields.io/npm/v/bradpitt.svg?maxAge=2592000)](https://www.npmjs.com/package/bradpitt)

_nothing in demo yet ;)_

This is a javascript snippet library for animating and interacting with the DOM. Most of these are modules I use in my projects everyday and simply wanted to share them for anyone else that's interested in contributing fun reusable code.

### npm

Install BradPitt, and add it to your `package.json` dependencies.

```
$ npm i bradpitt --save
```


## Lazy Add Classes

```javascript
import {lazy} from 'bradpitt'
```

#### Usage

```javascript
let oscar = document.querySelector('.award')

let oscars = document.querySelectorAll('.awards')

lazy(oscar, 'won', 600)

lazy(oscars, 'nominated', 900)
```

```javascript
lazy(oscar, 'nominated', 900, {
  change: 'add'
})
lazy(oscar, 'nominated', 1200, {
  change: 'remove'
})
```

## Vanilla JS Parallax

[Optional Reading](https://labs.redantler.com/vanilla-js-parallax-without-the-bloat-fd1f357914e7#.3xpjqrc2e) that explains the technique.

```javascript
import {swimming} from 'bradpitt'
```

Current implementation is on the DOM, this may change to being JS focused (in the optional reading above it's JS based), but for now set up the elements you want on the page as follows:

#### Usage
```html
<div class="bradpitt" data-speed="4">
  <img src="http://placehold.it/350x150">
</div>
<div class="bradpitt" data-speed="10">
  <img src="http://placehold.it/350x150">
</div>
```

```javascript
let parallax = swimming('.bradpitt');
parallax.init();
```

optional recommended css:

```css
transition: all 0.25s ease-out;
transition-delay: 0s;
```

Feel free to grab the source and configure for your own needs, I've used this for vertical/side-to-side/rotating elements on various sites. This is the slim version I may extend it to handle more situations. The css positioning of elements initially has a large impact as well.

* * *
 MIT License
