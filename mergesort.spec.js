describe('Split Array function', function() {
  it('is able to split an array into two halves', function() {
    // your code here 
    expect( split([1]) ).toEqual([[],[1]])
    expect( split([1,2,3,4]) ).toEqual([[1,2], [3,4]])
    expect( split([1,2,3,4,5]) ).toEqual([[1,2], [3,4,5]])

  });

  // it('is able to split an array into two halves', function() {
  //   // your code here 
  //   expect( split([1,2,3,4]) ).toEqual([[1,2], [3,4]])

  // });
});

describe('Merge', function(){
  it('is able to merge two sorted arrays into one sorted array', function(){
    // test the merging algorithm
    expect(merge([3,4], [1,5])).toEqual([1,3,4,5])
  });
});

describe('Split to one', function(){
  it('returns [[1]] when given [1]', function(){
    // test the merging algorithm
    expect(splitToOne([1])).toEqual([[1]])
    expect(splitToOne([1,2])).toEqual([[1],[2]])
  });
});

describe('Split to one', function(){
  it('1,2,3', function(){
    // test the merging algorithm
    // expect(splitToOne([1,2,3])).toEqual([[1],[2],[3]])
  });
});

describe('Merge Sort', function(){
  it('is able to sort & merge', function(){
    // test the merging algorithm
    // expect(mergeSort([6,5,1,3,2,4])).toEqual([1,2,3,4,5,6])
  });
});