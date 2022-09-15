var anArrayLikeObj = { 0: "Martin", 1: 78, 2: 67, 3: ["Letta", "Marieta", "Pauline"], length: 4 };
var newArray = Array.prototype.slice.call(anArrayLikeObj, 0);


var map = Array.prototype.filter.call(anArrayLikeObj, (e) => e == 'Martin')
console.log(map)