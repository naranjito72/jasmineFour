const findSameElementsArray = {
    tellMeIfAnyMatch(arrElem) {
        return new Set(arrElem).size !== arrElem.length;
    },
    findAllMatches(arrElem) {
        let elementsFound = [...new Set(arrElem)].filter((value) => arrElem.indexOf(value) !== arrElem.lastIndexOf(value)).sort();
        (elementsFound.length == 0) ? elementsFound = undefined : elementsFound;
        return elementsFound;
    },
    findOnlyOneMatch(arrElem) {
        return arrElem.sort((a, b) => a - b).find((value, indx, arrTwo) => arrTwo[indx] == arrTwo[indx + 1]);
    }
};
