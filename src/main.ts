// "One ring to rule them all"
class FindMatches {
  public arrElem: any[];
  constructor(arrElem: any[]){
    this.arrElem = arrElem;
  }
findThemAll() {
  return [...new Set(this.arrElem)].sort((a: any, b: any) => a - b).filter((value: any, i: number, newArr: any[]) => newArr[i] == newArr[i]);
}
}
