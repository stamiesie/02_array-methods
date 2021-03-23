const likeMap = require("./map");


describe('map', () => {
    it('takes in an array and a callback and creates a new array with callback called on each element of the calling array', () => {
     expect(likeMap([1, 2, 3], (n) => n * 2)).toEqual([2, 4, 6]);   
    })

    it('takes in an array and a callback and creates a new array with callback called on each element of the calling array', () => {
        expect(likeMap(['one', 'two', 'three'], (n) => n.toUpperCase())).toEqual(['ONE', 'TWO', 'THREE']);   
       })
});

