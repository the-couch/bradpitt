


/**
 *  @param  {object|...array} el dom element/s
 *  @param  {string} className long to wait for a response
 *  @param  {number} timing in milliseconds
 *  @param  {options} options object
 */

function lazy(el, className, timing, options = {}) {
  let change = options.change || 'add'
  let classSwap = (e) => {
    switch(change) {
      case 'add':
        e.classList.add(className)
        break
      case 'remove':
        e.classList.remove(className)
        break
      case 'toggle':
        e.classList.toggle(className)
        break
      default:
        console.log('invalid value for change option specified')
    }
  }
  let sT = (e) => {
    setTimeout(() => { classSwap(e) }, timing)
  }
  el.length ? Array.from(el, (e) => { sT(e) }) : sT(el)
  return this
}

exports.lazy = lazy
