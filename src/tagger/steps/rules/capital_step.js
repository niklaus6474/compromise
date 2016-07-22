'use strict';
//titlecase is a signal for a noun

const capital_logic = function(s) {
  //(ignore first word)
  for (let i = 1; i < s.terms.length; i++) {
    let t = s.terms[i]
    //has a capital, but isn't too weird.
    if (t.info('titleCase') && t.info('isWord') && !t.info('isAcronym')) {
      t.tag('Noun', 'capital-step')
    }
  }
  return s
}

module.exports = capital_logic