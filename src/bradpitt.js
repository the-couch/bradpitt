


/**
 *  @param  {object|...array} el dom element/s
 *  @param  {string} className long to wait for a response
 *  @param  {number} iming in milliseconds
 */

function lazy(el, className, timing) {

  if (el.length) {
    Array.from(el, (e) => {
      setTimeout(() => {
        e.classList.add(className)
      }, timing)
    })
  } else {
    setTimeout(() => {
      el.classList.add(className)
    }, timing)
  }
  return this
}

exports.lazy = lazy
