## Bradpitt.js

This is a javascript snippet library for animating and interacting with the DOM. Most of these are modules I use in my projects everyday and simply wanted to share them for anyone else that's interested in contributing fun reusable code.

## Initialize BradPitt

```
import BradPitt from 'bradpitt'
const bradpitt = new BradPitt()
```

### Lazy Adding classes

#### Usage

```
let oscar = doucment.querySelector('.award')

let oscars = doucment.querySelectorAll('.awards')

bradpitt.lazy(oscar, 'won', 600)

bradpitt.lazy(oscars, 'nominated', 900)
```
