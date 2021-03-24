const likeReduce = require("./reduce");


describe('reduce', () => {
    it('executes a reducer function on each element of the array, resulting in a single output value', () => {
        // const initialValue = 0;
        const numbersArr = [10, 20, 30, 40];

        // takes in acc and next item
        const reducer = (item, accumulator) => {
            accumulator += item;
            return accumulator;
        }
       
        expect(likeReduce(numbersArr, reducer)).toEqual(100);   
    });
});