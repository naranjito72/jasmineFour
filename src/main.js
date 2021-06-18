// "One ring to rule them all"
class FindMatches {
    constructor(arrElem) {
        this.arrElem = arrElem;
    }
    findThemAll() {
        return [...new Set(this.arrElem)].sort((a, b) => a - b).filter((value, i, newArr) => newArr[i] == newArr[i]);
    }
}
