
// 给定一个数组，把数组所有数字拼接起来排成一个数，打印能拼出的所有数字最小的一个。

function array_min(arr) {
    if(!arr || arr.length === 0) {
        return arr;
    }

    return arr.sort(compare).join('');
}

function compare(a, b) {
    let font = '' + a + b;
    let end = '' + b + a;
    
    return font - end;
}

let arr = [3,32,321];

// console.log(array_min(arr));


//给定一个全部由字母组成的字符串中找到第一个只出现一次的字符，并返回它的位置，如果没有则返回-1。

function searchStr(str) {
    if(!str) {
        return -1;
    }

    let strArr = str.split('');
    let index = [];
    let temp = [];

    for(let i = 0; i < strArr.length; i++) {
        temp = strArr.slice();
        temp.splice(i, 1);
        if(!temp.includes(strArr[i])) {
            index = [...index, i];
        }
    }
    index.sort((a, b) => { return a-b; });
    if(index.length === 0) {
        return -1;
    }else {
        return index[0];
    }
}

function searchStr_1(str) {
    for(let i = 0; i < str.length; i++) {
        if(str.indexOf(str[i]) === str.lastIndexOf(str[i])) {
            return i;
        }
    }

    return -1;
}

function searchStr_2(str) {
    if(!str) {
        return -1;
    }

    let obj = {};

    for(let i = 0; i < str.length; i++) {
        if(obj[str[i]]) {
            obj[str[i]]++;
        }else {
            obj[str[i]] = 1;
        }
    }
    for(let i = 0; i < str.length; i++) {
        if(obj[str[i]] === 1) {
            return i;
        }
    }
    return -1;
}

// console.log(searchStr('adasdsadxjashfjhjhdsjfhsdm'));
// console.log(searchStr_1('adasdsadxjashfjhjhdsjfhsdm'));
// console.log(searchStr_2('adasdsadxjashfjhjhdsjfhsdm'));


//输入一个整数数组，实现一个函数来调整该数组中数字的顺序，使得所有的奇数位于数组的前半部分，所有的偶数位于数组的后半部分

function orderArray(arr) {
    if(!Array.isArray(arr)) {
        return arr;
    }

    let start = 0;
    let end = arr.length - 1;

    while(start < end) {
        while(arr[start] % 2 === 1) {
            start++;
        }

        while(arr[end] % 2 === 0) {
            end--;
        }

        if(start < end) {
            [arr[start], arr[end]] = [arr[end], arr[start]];
        }
    }

    return arr;
}

// console.log(orderArray([1,2,3,4,5,6,7,8]));

//输入一个正数S，打印出所有和为S的连续正数序列

function findSequen(num) {
    let result = [];
    let child = [1, 2];
    let small = 1;
    let big = 2;
    let currentNum = 3;
    
    while(big < num) {
        while(currentNum < num && big < num) {
            child.push(++big);
            currentNum += big;
        }

        while(currentNum > num && small < big) {
            child.shift();
            currentNum -= small++;
        }

        while(currentNum === num && child.length > 1) {
            result.push(child.slice());
            child.push(++big);
            currentNum += big;
        }
    }

    return result;
}

// console.log(findSequen(100));

//输入一个递增排序的数组和一个数字S，在数组中查找两个数，使得他们的和正好是S，如果有多对数字的和等于S，输出两个数的乘积最小的。

function findNumberEqualNum(arr, sum) {
    if(!arr || arr.length === 0) {
        return arr;
    }

    let start = 0;
    let end = arr.length - 1;

    while(start < end) {
        let s = arr[start] + arr[end];
        console.log(s);
        if(s < sum) {
            start++;
        }else if(s > sum) {
            end--;
        }else {
            return [arr[start], arr[end]];
        }
    }
}

//console.log(findNumberEqualNum([1,2,3,4,5,6,7,8,9,10], 12));

//输入一个整型数组，数组里有正数也有负数。数组中的一个或连续多个整数组成一个子数组。
//求所有子数组的和的最大值，要求时间复杂度为O(n)

function FindMaxNumberOfArray(array) {
    if(!array || array.length === 0) {
        return 0;
    }

    let max = array[0];
    let sum = array[0];
    for(let i = 1; i < array.length; i++) {
        if(sum < 0) {
            sum = array[i];
        }else {
            sum += array[i];
        }

        if(sum > max) {
            max = sum;
        }
    }
    return max;
}

// console.log(FindMaxNumberOfArray([-1,-3,-6,7,-15,1,8,2]));

//给定一个整数数组 nums 和一个目标值 target，请你在该数组中找出和为目标值的那两个整数，并返回他们的数组下标。

function findTargetKeyOfArray(array, target) {
    if(!array || array.length === 0 || !target) {
        return [];
    }

    let map = {};
    for(let i = 0; i < array.length; i++) {
        if(map[target - array[i]] === undefined) {
            map[array[i]] = i;
        }else {
            return [map[target - array[i]] , i];
        }
    }

    return [];
}

//console.log(findTargetKeyOfArray([1,23,34,34,23,23,23,12,23,41], 35));

//扑克牌中随机抽5张牌，判断是不是一个顺子，即这5张牌是不是连续的。

//2-10为数字本身，A为1，J为11...大小王可以看成任何数字，可以把它当作0处理。

function isSortCard(array) {
    if(!array || array.length === 0) {
        return false;
    }

    let kingNums = 0;
    let spaceNums = 0;

    array.sort((a, b) => { return a - b; });
    for(let i = 0; i < array.length - 1; i++) {
        if(array[i] === 0) {
            kingNums += 1;
        }else {
            let space = array[i+1] - array[i];
            if(space == 0) {
                return false;
            }else {
                spaceNums += space - 1;
            }
        }
    }
    return kingNums - spaceNums >= 0;
}

// console.log(isSortCard([1,2,0,0,4]));

//统计一个数字在排序数组中出现的次数。

function findCount(array, num) {
    if(!array || array.length === 0) {
        return 0;
    }

    let map = {};

    for(let i = 0; i < array.length; i++) {
        if(map[array[i]]) {
            map[array[i]] += 1;
        }else {
            map[array[i]] = 1;
        }
    }
    console.log(map);
    for(let key in map) {
        if(key == num) {
            return map[key];
        }
    }
    return 0;
}

console.log(findCount([12,2,32,1,1,23,2,3,5,1,23,4,5,61,23], 1));