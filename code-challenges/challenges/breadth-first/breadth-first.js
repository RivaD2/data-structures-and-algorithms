'use strict'

const BinaryTree = require("../tree/tree");

class Tree extends BinaryTree {
    constructor(value) {
        super(value);
        this.value = value;
    }

    bfs() {
          if(tree === null) {
              console.log(tree);
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

