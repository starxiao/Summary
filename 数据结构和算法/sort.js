let arr = [23,232,454,34,3,34,543,34,34,234];
function quickSort(arr) {
    if(arr.length < 2) {
        return arr;
    }

    let target = arr[0];
    let left = [];
    let right = [];

    for(let i = 1; i < arr.length; i++) {
        if(arr[i] < target) {
            left.push(arr[i]);
        }else {
            right.push(arr[i]);
        }
    }

    return quickSort(left).concat([target], quickSort(right));
}

function quickSort_1(arr, start, end) {
    if(end - start < 1) {
        return;
    }

    let target = arr[start];
    let l_index = start;
    let r_index = end;

    while(l_index < r_index) {
        while(l_index < r_index && arr[r_index] >= target) {
            r_index --;
        }
        arr[l_index] = arr[r_index];

        while(l_index < r_index && arr[l_index] < target) {
            l_index ++;
        }
        arr[r_index] = arr[l_index];
    }
    arr[l_index] = target;
    quickSort_1(arr, start, l_index-1);
    quickSort_1(arr, l_index+1, end);
    return arr;
}

// console.log(arr);
// console.log(quickSort_1(arr,0,arr.length-1));

function insertSort(arr) {
    for(let i = 1; i < arr.length; i++) {
        let target = i;
        for(let j = i - 1; j >= 0; j--) {
            if(arr[j] > arr[target]) {
                [arr[target], arr[j]] = [arr[j], arr[target]];
                target = j;
            }else {
                break;
            }
        }
    }
    return arr;
}
// console.log(arr);
// console.log(insertSort(arr));
function bubbleSort(arr) {
    for(let i = 0; i < arr.length; i++) {
        let isBubbled = false;
        for(let j = 0; j < arr.length - 1 - i; j++) {
            if(arr[j] > arr[j+1]) {
                [arr[j], arr[j+1]] = [arr[j+1], arr[j]];
                isBubbled = true;
            }
        }
        if(!isBubbled) {
            break;
        }
    }
    return arr;
}

// console.log(arr);
// console.log(bubbleSort(arr));

function selectSort(arr) {
    for(let i = 0; i < arr.length - 1; i++) {
        let minIndex = i;
        for(let j = i + 1; j < arr.length; j++) {
            if(arr[j] < arr[minIndex]) {
                minIndex = j;
            }
        }
        [arr[i], arr[minIndex]] = [arr[minIndex], arr[i]];
    }
}

// console.log(arr);
// console.log(bubbleSort(arr));

function merge(left, right) {
    let temp = [];

    while(left.length && right.length) {
        if(left[0] < right[0]) {
            temp.push(left.shift());
        }else {
            temp.push(right.shift());
        }
    }

    return temp.concat(left, right);
}

function mergeSort(arr) {
    if(arr.length < 2) {
        return arr;
    }

    let mid = Math.floor(arr.length/2);
    let left = arr.slice(0, mid);
    let right = arr.slice(mid);

    return merge(mergeSort(left), mergeSort(right));
}

console.log(arr);
console.log(mergeSort(arr));