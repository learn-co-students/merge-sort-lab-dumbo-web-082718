function findMinAndRemoveSorted(array){
  let sorted = array.sort( (a, b) => {return a - b} )
  return sorted.shift()
}

function merge(arrayOne, arrayTwo){
  let sortedArray = []
  while((arrayOne.length !== 0) && (arrayTwo.length !== 0) ) {
    if (arrayOne[0] < arrayTwo[0]) {
      sortedArray.push(findMinAndRemoveSorted(arrayOne))
    } else {
      sortedArray.push(findMinAndRemoveSorted(arrayTwo))
    }
  }
  return sortedArray.concat(arrayOne).concat(arrayTwo)
}

function mergeSort(array){
  let midpoint = array.length / 2
  let firstHalf = array.slice(0, midpoint)
  let secondHalf = array.slice(midpoint, array.length)
  let sortedArray = []

  if (array.length < 2) {
    return array
  } else {
    sortedArray = merge(mergeSort(firstHalf), mergeSort(secondHalf))
  }
  return sortedArray
}
