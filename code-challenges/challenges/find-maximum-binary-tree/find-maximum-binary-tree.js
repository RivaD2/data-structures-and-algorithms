'use strict'

const BinaryTree = require("../tree/tree");

class findMaxBinaryTree extends BinaryTree {
    constructor() {
        super();
        this.max = 0;
    }

findMaximumValue(tree, rootNode, searchValue) {
        //queue helps me keep track of things
        //queue should be empty at the end
        let queue = [];
        queue.push(rootNode);
        console.log('node into queue', queue)
        //while there is something in the queue search until empty
        while(queue.length > 0) {
            //assign top of queue to var currentNode
            let currentNode = queue[0];
            console.log('Current Node is: ' + currentNode.value);
            //if currentNode is node I am trying to find, break
            if(currentNode.value === searchValue) {
                console.log('Got it!');
                return;
            }
            //Look if there is left node and right child node and add to queue
            if(currentNode.left !== null) {
                queue.push(tree[currentNode.left]);
            }
            if(currentNode.right !== null) {
                queue.push(tree[currentNode.right]);
            }
            //remove currentNode from queue
            queue.shift();
        }
        console.log('Jedi Mind trick: This is not the node you have been searching for');
    } 
}  
//give tree root and then a left and right, build tree by hand
findMaxValue(tree, tree[10], '12');
