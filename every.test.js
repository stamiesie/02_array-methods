const  likeEvery= require("./every");


describe('find every', () => {
    it('returns true if all elements in array pass the test implemented by callback function', () => {
     expect(likeEvery([3, 6, 9, 12, 15], (n) => n < 20)).toBeTruthy();   
    });

    it('returns false if all elements in array pass the test implemented by callback function', () => {
     expect(likeEvery([3, 4, 5, 6, 7, 11], (n) => n < 10)).toBeFalsy();   
    });
});