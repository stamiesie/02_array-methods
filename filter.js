const likeFilter = (array, callback) => {
    let newArray = [];
  for (let i = 0; i < array.length; i++) {
    if (callback(array[i]))  
    newArray[newArray.length] = array[i];
}  
// console.log(newArray);
return newArray;
}



module.exports = likeFilter;