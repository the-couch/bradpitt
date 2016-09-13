## Bradpitt.js

_nothing in demo yet ;)_

This is a javascript snippet library for animating and interacting with the DOM. Most of these are modules I use in my projects everyday and simply wanted to share them for anyone else that's interested in contributing fun reusable code.

### npm

Install BradPitt, and add it to your `package.json` dependencies.

```
$ npm i bradpitt --save
```


## Initialize BradPitt Modules

```javascript
import {lazy} from 'bradpitt'
```

### Lazy Adding classes

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

* * *
 MIT License
