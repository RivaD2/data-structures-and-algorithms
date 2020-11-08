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

}
fizzBuzzTree(tree) {
//Is value of each node divisible by 3, 5 or both. 
let current = this.root;
if(current.value % 3 || current.value % 5) {
    
} 
}







module.exports = FizzBuzzTree;