// "One ring to rule them all"
class FindMatches {
  public arrElem: any[];
  constructor(arrElem: any[]){
    this.arrElem = arrElem;
    // check if is object or array
      (this.arrElem.constructor !== Array) ? this.arrElem  = Object.values(this.arrElem) : this.arrElem;
  }
  // getter
  getArrElem() {
    return this.arrElem;
  }

findThemAll() {
let result: any[] = this.arrElem.sort((a: any, b: any) => a - b).filter((value: any, i: number, newArr: any[]) => newArr[i] === newArr[i + 1]);
(result.length == 0) ? result = undefined : result = [...new Set(result)];
return result;
}
}
