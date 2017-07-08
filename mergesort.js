function split(wholeArray) {

  /* your code here to define the firstHalf and secondHalf arrays */
	if (wholeArray.length === 1){
		return [[], wholeArray]
	} else {
		var halfpoint = wholeArray.length%2? Math.floor(wholeArray.length/2) : wholeArray.length/2
		firstHalf = wholeArray.slice(0,halfpoint)
		secondHalf = wholeArray.slice(halfpoint)	
		return [firstHalf, secondHalf];
	}
	
}

function merge(arr1, arr2){
	var results_arr = [];
	while (arr1.length && arr2.length){
		if (arr1[0] < arr2[0]){
			results_arr.push(arr1.shift())
		} else {
			results_arr.push(arr2.shift())
		}	
	}
	if (arr1.length){
		results_arr = results_arr.concat(arr1)
	} else {
		results_arr = results_arr.concat(arr2)
	}
	return results_arr
}

function splitToOne(array){
	var results_arr = [];
	if (array.length <= 1){
	  	results_arr.push(array)
	  } else {
	  	var split_array = split(array)
	  	results_arr = results_arr.concat(splitToOne(split_array[0]), splitToOne(split_array[1]))
	  }
	 return results_arr

}


function mergeSort(array) {
  /* your code here */
  var split_array = splitToOne(array) //
  // var merged = merge(split_array.shift(), split_array.shift())
  var results_arr = []
  while(split_array.length > 1){
  	split_array.push(merge(split_array.shift(), split_array.shift()))
  }
  return split_array[0]

}

console.log(mergeSort([6,5,1,3,2,4]))
