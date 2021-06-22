describe('FindMatches', function(){
  var arrContainer;
  var arrNumOne = [1, 2, 3, 4, 5];
  var arrNumTwo = [1, 2, 3, 4, 5, 1, 2, 3, 3];
  var arrstrOne = ["ab", "bc", "cd", "de"];
  var arrStrTwo = ["ab", "bc", "cd", "de", "ab", "cd"];

  beforeEach(() => {
    arrContainer = new FindMatches(arrNumOne);
  });

  describe("constructor function", function() {
    it('Should recieve one parameter(array of numbers)', function(){
      expect(FindMatches.length).toEqual(1);
    });
  });

  describe('findThemAll() method', function(){
    it('findThemAll() should be a function', function() {
      expect(typeof (arrContainer.findThemAll)).toBe('function')
    });
    it('Should no have any argument', () => {
      expect(arrContainer.findThemAll.length).toEqual(0);
    });
  });

  describe('Returns from array with no matches', function() {
    it('Should return "undefined" if empty array', () => {
      let result = arrContainer.findThemAll();
      expect(arrContainer.findThemAll()).toEqual(undefined)
    })
  })
});
