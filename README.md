## Bradpitt.js

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

### Lazy Adding classes

#### Usage

```javascript
let oscar = doucment.querySelector('.award')

let oscars = doucment.querySelectorAll('.awards')

lazy(oscar, 'won', 600)

lazy(oscars, 'nominated', 900)
```

## Vanillia JS Parallax

[https://labs.redantler.com/vanilla-js-parallax-without-the-bloat-fd1f357914e7#.3xpjqrc2e](Optional Reading) that explains the technique.

```javascript
import {swimming} from 'bradpitt'
```

Current implementation is on the dom, this may change to being JS focused but for now set up the elements you want on the page as follows:

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
