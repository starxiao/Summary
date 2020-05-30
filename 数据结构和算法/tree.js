
function Node(data, left, right) {
    this.data = data;
    this.left = left;
    this.right = right;
}

Node.prototype = {
    show() {
        console.log(this.data);
    }
}

function Tree() {
    this.root = null;
}

Tree.prototype = {
    insert(data) {
        let node = new Node(data, null, null);

        if(!this.root) {
            this.root = node;
            return;
        }

        let current = this.root;
        let parent = null;
        while(current) {
            parent = current;
            if(data < parent.data) {
                current = current.left;
                if(!current) {
                    parent.left = node;
                    return;
                }
            }else {
                current = current.right;
                if(!current) {
                    parent.right = node;
                    return;
                }
            }
        }
    },
    preOrder(node) {
        if(node) {
            node.show();
            this.preOrder(node.left);
            this.preOrder(node.right);
        }
    },
    middleOrder(node) {
        if(node) {
            this.middleOrder(node.left);
            node.show();
            this.middleOrder(node.right);
        }
    },
    laterOrder(node) {
        if(node) {
            this.laterOrder(node.left);
            this.laterOrder(node.right);
            node.show();
        }
    },
    getMin() {
        let current = this.root;
        while(current) {
            if(!current.left) {
                return current;
            }
            current = current.left;
        }
        return '';
    },
    getMax() {
        let current = this.root;
        while(current) {
            if(!current.right) {
                return current;
            }
            current = current.right;
        }
        return '';
    },
    getDeep(node, deep=0) {
        if(node == null) {
            return deep;
        }
        deep++;
        let dLeft = this.getDeep(node.left, deep);
        let dRight = this.getDeep(node.right, deep);
        return Math.max(dLeft, dRight);
    },
    getNode(data, node) {
        if(node) {
            if(data === node.data) {
                return node;
            }else if(data < node.data) {
                return this.getNode(data, node.left);
            }else {
                return this.getNode(data, node.right);
            }
        }
        return null;
    }
}

// let tree = new Tree();
// tree.insert(10);
// tree.insert(2);
// tree.insert(5);
// tree.insert(11);
// tree.insert(16);

// console.log(tree);
// console.log(tree.getMin());
// console.log(tree.getMax());
// console.log(tree.getDeep(tree.root, 0));

// console.log('******************');
// console.log(tree.getNode(5, tree.root));

//二分法查找
function binarySearch(arr, data, start, end) {
    start = start || 0;
    end = end || arr.length-1;
    let middile = Math.floor((start + end )/2);

    if(start > end) {
        return -1;
    }

    if(data === arr[middile]) {
        return middile;
    }else if(data < arr[middile]) {
        return binarySearch(arr, data, start, middile-1);
    }else {
        return binarySearch(arr, data, middile+1, end);
    }
}

// let arr = [1, 2, 3, 4, 5];
// console.log(binarySearch(arr, 3));
// console.log(binarySearch(arr, 1));
// console.log(binarySearch(arr, 5));
// console.log(binarySearch(arr, 0));
// console.log(binarySearch(arr, 6));


//给定二叉树，输出其中序
function middleOrder(root, array = []) {
    if(root) {
        middleOrder(root.left, array);
        array.push(root.data);
        middleOrder(root.right, array);
    }
    return array;
}

function middleOrder_1(root, result = []) {
    const stack = [];
    let current = root;

    while(current || stack.length > 0) {
        while(current) {
            stack.push(current);
            current = current.left;
        }

        current = stack.pop();
        result.push(current.data);

        current = current.right;
    }
}

//先序遍历
function preOrder(root, array = []) {
    if(root) {
        array.push(root.data);
        preOrder(root.left, array);
        preOrder(root.right, array);
    }
    return array;
}

function preOrder_1(root, array = []) {
    const stack = [];
    let current = root;

    while(current || stack.length > 0) {
        while(current) {
            array.push(current.data);
            stack.push(current);
            current = current.left;
        }
        current = stack.pop();
        current = current.right;
    }
}

//后序遍历
function nextOrder(root, array = []) {
    if(root) {
        nextOrder(root.left, array);
        nextOrder(root.right, array);
        array.push(root.data);
    }
    return array;
}

function nextOrder_1(root, array = []) {
    const stack = [];
    let current = root;
    let last = null;

    while(current || stack.length > 0) {
        while(current) {
            stack.push(current);
            current = current.left;
        }

        current = stack[stack.length - 1];
        if(!current.right || current.right == last) {
            current = stack.pop();
            array.push(current.data);
            last = current;
            current = null;
        }else {
            current = current.right;
        }
    }
}

// let tree = new Tree();

// tree.insert(10);
// tree.insert(5);
// tree.insert(18);
// tree.insert(15);

// console.log(tree.root);
// let array = [];
// middleOrder(tree.root, array);
// middleOrder_1(tree.root, array);
// preOrder(tree.root, array);
// preOrder_1(tree.root, array);
// nextOrder(tree.root, array);
// nextOrder_1(tree.root, array);
// console.log(array);

//根据前序和中序遍历还原二叉树
function revertTree(pre, mid) {
    if(pre.length === 0) {
        return null;
    }

    if(pre.length === 1) {
        return pre[0];
    }

    let root = pre[0];
    let index = mid.indexOf(root);
    let pre_left = pre.slice(1, index+1);
    let pre_right = pre.slice(index+1);
    let mid_left = mid.slice(0, index);
    let mid_right = mid.slice(index+1);
    let node = new Node(root);
    node.left = revertTree(pre_left, mid_left);
    node.right = revertTree(pre_right, mid_right);
    return node;
}

// console.log(revertTree([1,2,4,7,3,5,6,8], [4,7,2,1,5,3,8,6]));


//二叉搜素树找到第k小的值，其实就是排序
function kNode(root, k) {
    let array = [];
    middleSort(root, array);
    console.log(array);
    if(k > 0 && k < array.length) {
        return array[k - 1];
    }

    return null;
}

function middleSort(node, array) {
    if(node) {
        middleSort(node.left, array);
        array.push(node.data);
        middleSort(node.right, array);
    }
}

// let tree = new Tree();
// tree.insert(5);
// tree.insert(3);
// tree.insert(7);
// tree.insert(2);
// tree.insert(4);
// tree.insert(6);
// tree.insert(8);
// console.log(tree);
// console.log(kNode(tree.root, 3));


//一颗二叉树的最大深度等于左子树深度和右子树深度的最大值+1

function TreeDepth(root) {
    return !root ? 0 : Math.max(TreeDepth(root.left), TreeDepth(root.right)) + 1;
}

let tree = new Tree();
tree.insert(3);
tree.insert(9);
tree.insert(20);
tree.insert(7);

console.log(tree);
console.log(TreeDepth(tree.root));