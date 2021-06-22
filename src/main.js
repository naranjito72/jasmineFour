// "One ring to rule them all"
class FindMatches {
    constructor(arrElem) {
        this.arrElem = arrElem;
    }
    findThemAll() {
        let result = this.arrElem.sort((a, b) => a - b).filter((value, i, newArr) => newArr[i] === newArr[i + 1]);
        (result.length == 0) ? result = undefined : result = [...new Set(result)];
        return result;
    }
}
