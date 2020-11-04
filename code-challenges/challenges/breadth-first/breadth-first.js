'use strict'

const BinaryTree = require("../tree/tree");

class Tree extends BinaryTree {
    constructor(value) {
        super(value);
        this.max = 0;
        this.value = value;
    }

    bft(tree, callback) {
          if(tree === null) {
              return;
          }
          let queue = [tree];
          while(queue.length > 0) {
              let item = queue.shift();
              let value = item.value;
              callback(value);
              if(item.left === null && item.right === null) {
                  continue;
              }
              if(item.left !== null) {
                  queue.push(item.left);
              }
              if(item.right !== null) {
                queue.push(item.right);
            }
        }
    }
}

const t = new Tree(1, null, null)
     console.log(t);
