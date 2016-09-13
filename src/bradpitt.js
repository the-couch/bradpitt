


/**
 *  @param  {object|...array} el dom element/s
 *  @param  {string} className long to wait for a response
 *  @param  {number} iming in milliseconds
 */

function lazy(el, className, timing) {
  let sT = (e) => {
    setTimeout(() => { e.classList.add(className) }, timing)
  }
  el.length ? Array.from(el, (e) => { sT(e) }) : sT(e)
  return this
}

exports.lazy = lazy
