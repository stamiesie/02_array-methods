const likeFindIndex = (array, callback) => {
  for (let i = 0; i < array.length; i++) {
    if (callback(array[i]))  
    return i;
    }
    return -1; 
}



module.exports = likeFindIndex;