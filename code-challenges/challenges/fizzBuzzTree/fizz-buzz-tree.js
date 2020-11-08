'use strict';

class Node {
    constructor(value, k) {
        this.value = value;
        // I need to know what k it is so when I copy tree I can use the same num
        this.k = k;
        //a new array of k length
        this.children = new Array(k);

    }
}

class Tree extends Node {
    constructor() {
        super()
        this.root = null;
        
    }
    add(newValue, k) {
        let newNode = new Node(newValue, k);
        if(this.root === null) {
            this.root = newNode;
            return this;
        } else {
            //process involves looping just like in linkedlist
            //starting in head and updating current as I go
            let current = this.root;
            let queue = [];
            while(current) {
                let childCount = current.children.length;
                for(let i = 0; i < childCount; i++) {
                    const child = current.children[i];
                    if(child === undefined) {
                        current.children[i] = newNode;
                        i = current.children.length;
                        current = undefined;
                        //break from loop
                    } else {
                        queue.unshift(child);
                    }
                }
                if(current !== undefined) {
                    current = queue.pop();
                }
            }
        }
    }
}

const fizzBuzzTree = unfizzyTree => {
//Is value of each node divisible by 3, 5 or both. 
    let fizzyTree = new Tree();
    let current = unfizzyTree.root;
    //creating a root separately for fizzy tree before traversal of unfizzy tree
    let fizzBuzzRoot = new Node(getFizzBuzz(current.value), current.k);
    fizzyTree.add(fizzBuzzRoot);
    let queue = [];
    while(current) {
        const childCount = current.children.length;
        //some() iterates through array until true is returned
        //looping through unfizzy tree and find all nodes to add to new tree
        for(let i = 0; i < childCount; i++) {
            const child = current.children[i];
            if(child === undefined) {
                //we are at the end of the tree, nothing left to do
                current = undefined;
                i = childCount;
            } else {
                //found a child node, so I need to add corresponding child node
                queue.unshift(child);
                fizzyTree.add(getFizzBuzz(child.value), child.k);
            }
        }
        if(current !== undefined) {
            current = queue.pop();
        }
    }
    return fizzyTree;
} 

const getFizzBuzz = value => {
    //this function will return value that I want to add to new tree
    // so fizz, buzz, fizzbuzz, or original value
    let number = parseInt(value);
    if(number % 3 && number % 5) {
        //If the number is divisible by 3 and 5, replace the number with “Fizzbuzz”
        return value;
    } else if(number % 3 && !(number % 5)) {
        return 'Buzz';
    } else if(number % 5 && !(number % 3)) {
        return 'Fizz';
    } else {
        return 'Fizzbuzz';
    }
}

const k = 3;
const nodeCount = 19;
//creating a k-ary tree
const unfizzedTree = new Tree();
for(let i = 1; i <= nodeCount; i++) {
    unfizzedTree.add(i.toString(), k);
}
console.log(JSON.stringify(unfizzedTree));
const fizzedTree = fizzBuzzTree(unfizzedTree);
console.log(JSON.stringify(fizzedTree));



module.exports = fizzBuzzTree;

