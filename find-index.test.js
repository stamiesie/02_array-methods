const  likeFindIndex= require("./find-index");


describe('find index', () => {
    it('returns the first element in the array that satisfies the callback function', () => {
     expect(likeFindIndex([3, 6, 9, 12, 15], (n) => n > 10)).toEqual(3);   
    });

    it('returns the first element in the array that satisfies the callback function', () => {
     expect(likeFindIndex([3, 4, 5, 6, 7], (n) => n > 10)).toEqual(-1);   
    });
});