
let classSwap = (e, change, className) => {
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

/**
 *  @param  {object|...array} el dom element/s
 *  @param  {string} className long to wait for a response
 *  @param  {number} timing in milliseconds
 *  @param  {options} options object
 */

let lazy = (el, className, timing, options = {}) => {
  let change = options.change || 'add'
  let sT = (e) => {
    setTimeout(() => { classSwap(e, change, className) }, timing)
  }
  el.length ? Array.from(el, (e) => { sT(e) }) : sT(el)
}

let swimming = (className) => {
  const instance = Object.create({
    init: () => {
      window.addEventListener('scroll', handleScroll)
    }
  })
  return instance

  function handleScroll() {
    let elms = document.querySelectorAll(className)
    elms.length ? Array.from(elms, (e) => { mI(e)}) : mI(elms)
  }

  function mI(el) {
    let scrollPosition = setPosition()
    let displace = el.getAttribute('data-speed') || 2
    el.style.transform = "translate3d(0px, "+(scrollPosition / displace)+"px, 0px)"
  }

  function setPosition() {
    if (window.pageYOffset !== undefined) {
      return window.pageYOffset
    } else {
      return (document.documentElement || document.body.parentNode || document.body).scrollTop
    }
  }
}

exports.lazy = lazy
exports.swimming = swimming
