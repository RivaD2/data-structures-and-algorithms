'use strict'

const BinaryTree = require("../tree/tree");

class findMaxBinaryTree extends BinaryTree {
    constructor() {
        super();
        this.max = 0;
    }

findMaximumValue() {
        //data is all nodes that are visited
        let data = [];
        //queue helps me keep track of things
        //queue should be empty at the end
        let queue = [];
        let node = this.root;
        console.log(node);
        queue.push(node);
        console.log('node into queue', queue)
        //while there is something in the queue
        while(queue.length) {
            //taking from beginning of queue 
            //dequeuing here with shift
            node = queue.shift();
            data.push(node);
            if(node.value > this.max){
                this.max = node.value;
            }
            //add to queue if there is a left or right node
            if(node.left) queue.push(node.left);
            if(node.right) queue.push(node.right);
        } 
        //data holds nodes I've visited
        return data;
    }
}
//give tree root and then a left and right, build tree by hand
let tree = new findMaxBinaryTree();
