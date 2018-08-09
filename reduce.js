//reduce

[0,1,2,3,4].reduce(function(prevValue, value, index, array){
  return prevValue + value;
}, 10);
// 1st time
prevValue = 10, value = 0, index = 0
// 2nd time
prevValue = 10, value = 1, index = 1
// 3rd time
prevValue = 11, value = 2, index = 2
// 4th time
prevValue = 13, value = 3, index = 3
// 5th time
prevValue = 16, value = 4, index = 4
// Value returned: 20
//So... what happens if we execute the following?
[0,1,2,3,4].reduce(function(prevValue, value, index, array){
  return prevValue + value;
});

[].reduce((prevValue, value, index)=> value+2, 4);
[].reduce((prevValue, value, index)=> prevValue+2);
[1].reduce((prevValue, value, index)=> value+2);