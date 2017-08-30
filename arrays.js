var chocolateBars = ['snickers', 'hundred grand', 'kitkat', 'skittles'];

function addElementToBeginningOfArray(array, element) {
  var n = [element, ...array]
  return n
}

function destructivelyAddElementToBeginningOfArray(array, element) {
    const arr = array 
    array.unshift(element);
}
