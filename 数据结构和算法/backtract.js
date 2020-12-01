function Permutation(str) {
    const result = [];
    if(str) {
        let queue = str.split(',');
        PermutationCore(queue, result);
    }

    result.sort();
    return [... new Set(result)];
}

function PermutationCore(queue, result, temp='', current='') {
    current += temp;
    console.log('current:', current);
    if(queue.length === 0) {
        result.push(current);
        return;
    }

    console.log('queue：',queue);
    for(let i = 0; i < queue.length; i++) {
        temp = queue.shift();
    console.log('temp:', temp);
        PermutationCore(queue, result, temp, current);

        queue.push(temp);
        console.log('queue1：', queue);
    }
}

console.log(Permutation('a,b,c'));