const  likeFindIndex= require("./find-index");


describe('find index', () => {
    it('returns the first element in the array that satisfies the callback function', () => {
     expect(likeFindIndex([3, 6, 9, 12, 15], (n) => n > 10)).toEqual(3);   
    });
});