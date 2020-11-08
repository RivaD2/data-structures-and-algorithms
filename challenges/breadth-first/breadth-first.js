'use strict'

const BinaryTree = require("../tree/tree");
class Tree extends BinaryTree {
    constructor() {
        super();
        this.root = null;
    }


    bft(tree) {
        let queue = [];
        if(!tree.root) {
            return null;
        } else {
            queue.unshift(tree.root);
        }
        let current = queue.pop();

        while(current) {
          if(current.left) {
              queue.unshift(current.left);
          }
          if(current.right) {
            queue.unshift(current.right);
          }
            current = queue.pop();
        }   
        return;
    }
}

const tree = new Tree();
tree.root = new Node(1);
tree.root.left = new Node(2);
tree.root.right = new Node(3);
breadthFirst(tree);