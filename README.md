## Bradpitt.js

_nothing in demo yet ;)_

This is a javascript snippet library for animating and interacting with the DOM. Most of these are modules I use in my projects everyday and simply wanted to share them for anyone else that's interested in contributing fun reusable code.

## Initialize BradPitt

`npm i -s bradpitt`

```javascript
import BradPitt from 'bradpitt'
const bradpitt = new BradPitt()
```

### Lazy Adding classes

#### Usage

```javascript
let oscar = doucment.querySelector('.award')

let oscars = doucment.querySelectorAll('.awards')

bradpitt.lazy(oscar, 'won', 600)

bradpitt.lazy(oscars, 'nominated', 900)
```

* * *
 MIT License
