'use strict';

class Node {
    constructor(value, k) {
        this.value = value;
        //a new array of k length
        this.children = new Array(k);

    }
}

class FizzyTree extends Node {
    constructor() {
        super()
        this.root = null;
        
    }
    add(newValue) {
        let newNode = new Node(newValue);
        if(this.root === null) {
            this.root = newNode;
            return this;
        } else {
            //process involves looping just like in linkedlist
            //starting in head and updating current as I go
            let current = this.root;
            while(current) {
                //iterates through array until true is returned
                this.children.some((value, index)=> {
                    if(value === undefined) {
                        this.children[index] = newNode;
                        current = undefined;
                        return true;
                    }
                })
            }
        }
    }
}

fizzBuzzTree(tree) {
//Is value of each node divisible by 3, 5 or both. 
if(current.value % 3 || current.value % 5) {

} 
}


const k = 3;
const node = new Node(1, k);
const nodeTwo = new Node(2, k)




module.exports = FizzBuzzTree;