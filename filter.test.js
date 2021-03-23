const likeFilter = require("./filter");


describe('filter', () => {
    it('takes in an array and a callback and creates a new array with only even elements', () => {
     expect(likeFilter([2, 4, 6, 8, 9, 11, -13], (n) => n % 2 === 0)).toEqual([2, 4, 6, 8]);   
    });
});