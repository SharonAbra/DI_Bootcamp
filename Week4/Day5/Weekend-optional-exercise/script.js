let input = [1,2,4,591,392,391,2,5,10,2,1,1,1,20,20];
// [1, 1, 1, 1, 10, 2, 2, 2, 20, 20, 391, 392, 4, 5, 591]

const numFunc = (list) => {
    let result = [];
    list = list.sort();
    let tempList = [];
    for (let i = 0; i < list.length-1; i++) {
        tempList.push(list[i]);
        if (list[i] === list[i+1]) {
            tempList.pop();
            tempList.push(list[i]);
        } else {
            result.push(tempList);
            tempList = [];
        }
    }
    return result;
}
console.log(numFunc(input));




