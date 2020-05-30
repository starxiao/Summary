function binarySearch(data, array, start, end) {
    if(!data || !array) {
        retrun -1;
    }

    let mid = Math.floor((start + end) / 2);

    if(data > array[mid]) {
        return binarySearch(data, array, mid + 1, end);
    }else if(data < array[mid]) {
        return binarySearch(data, array, start, mid - 1);
    }else {
        return mid;
    }
}

// let arr = [1,2,3,4,5,6,7,8,9,10];
// console.log(binarySearch(6,arr,0,arr.length-1));


//统计一个数字在排序数组中出现的个数

//方法1： 循环这个数组，如果该数字和数组的某个值相等时，记录index和直到不等于该数字的index。

function countNumber(data, array) {
    if(!data || !array) {
        return 0;
    }

    let startIndex = 0;
    
    return array.lastIndexOf(data) - array.indexOf(data) + 1;
    for(let i = 0; i <= array.length; i++) {
        // if(data === array[i] && startIndex === -1) {
        //     startIndex = i;
        // }
        // if(startIndex !== -1 && endIndex === -1 && data !== array[i]) {
        //     endIndex = i;
        // }
        if(data === array[i] && array[i] === array[i+1]) {
            startIndex++;
        }
    }
    return startIndex + 1;
    return startIndex === -1 ? 0 : endIndex - startIndex;
}

// let arr = [1,2,3,4,5,5,5,5,8,9,10];
// console.log(countNumber(5, arr));

//一只青蛙一次可以跳上1级台阶，也可以跳上2级。求该青蛙跳上一个n级的台阶总共有多少种跳法

//跳三级台阶等于跳两级台阶的跳法+跳一级台阶的跳法。

//跳四级台阶等于跳三级台阶的跳法+跳二级台阶的跳法。

//明显也符合斐波那契数列的规律

f(n) = f(n-1) + f(n-2)

//存递归
function Fibonacci(n) {
    if(n < 2) {
        return n;
    }

    return Fibonacci(n-2) + Fibonacci(n-1);
}

//递归加记忆化
function Fibonacci_1(n, memory = []) {
    if(n < 2) {
        return n;
    }

    if(!memory[n]) {
        memory[n] = Fibonacci_1(n-2, memory) + Fibonacci_1(n-1, memory);
    }

    return memory[n];
}

//动态规划
function Fibonacci_2(n) {
    if(n <= 1) {
        return n;
    }

    let i = 1;
    let pre = 0;
    let current = 1;
    let result = 0;

    while(i++ < n) {
        result = pre + current;
        pre = current;
        current = result;
    }

    return result;
}
let arr = []
console.log(Fibonacci(10));
console.log(Fibonacci_1(10));
console.log(Fibonacci_2(10));

