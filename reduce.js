const likeReduce = (array, callback) => {
    // need initialValue for starting point outside for loop
    let initialValue = 0;
    for (let i = 0; i < array.length; i++) {
    
    // reducer callback adds each array element to accumulator in test
    initialValue = callback(array[i], initialValue)
    }
    return initialValue;
}



module.exports = likeReduce;