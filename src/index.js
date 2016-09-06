
const isObj = o => o !== null && 'object' === typeof o && !('nodeType' in o)

const returnSize = (el, type) => {
  const isWindow = el !== null && el.window ? true : false

  if (isWindow){
    return Math.max(el[`outer${type}`], document.documentElement[`client${type}`])
  }

  return Math.max(el[`offset${type}`], el[`client${type}`])
}

const returnPosition = () => {
  if (window.pageYOffset !== undefined) {
    return window.pageYOffset;
  } else {
    return (document.documentElement || document.body.parentNode || document.body).scrollTop;
  }
}

const returnScroll = () => window.scrollY || window.pageYOffset

/**
 * @param {string} type Either 'parallax', or 'mousemove'
 * @param {object} el Required dom element
 * @param {...array} args Optional args
 */

const bradpitt = (type, el, ...args) => {
  const isParallax = type === 'parallax' ? true : false

  const instance = Object.create({
    init: function()  {
      console.log('les guac')
    }
  })
}

export default {
  parallax: (el, options) => {
    return bradpitt('parallax', el, options)
  }
}
