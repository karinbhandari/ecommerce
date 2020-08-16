// @ts-check

/**
 * @function
 * @param {Object} head
 * @param {Array} targets
 */
const enhanceAll = (head, targets) => targets.reduce((ac, cv) => cv(ac), head)

module.exports = {
  enhanceAll,
}
