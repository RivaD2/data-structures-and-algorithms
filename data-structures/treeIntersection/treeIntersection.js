const { root } = require("cheerio");

class Node {
    constructor(item) {
      this.item= item;
      this.right = null;
      this.left = null;
      this.count = 0;
    };
  };
  
  class BST {
    constructor() {
      this.root = null;
    }
    create(item) {
      const newNode = new Node(item);
      if (!this.root) {
        this.root = newNode;
        return this;
      };
      let current = this.root;
      const addSide = side => {
        if (!current[side]) {
          current[side] = newNode;
          return this;
        };
        current = current[side];
      };
  
      while (true) {
        if (item === current.item) {
          current.count++;
          return this;
        };
        if (item < current.item) addSide('left');
        else addSide('right');
      };
    };
  };
  
  function tree_intersection((root1, root2) {
     if(this.root === null) {
       return undefined;
     }
     let searchArray1 = [];
     let searchArray2 = [];

    // inOrder traversal for each tree left---> root---> right
    // function inOrder(root) {
    //   if(root) {
    //     inOrder(root.left);
    //   }
    // }
    while(1) {
      if(root1) {
        searchArray1.push(root1);
        root1 = root1.left;
      } else if (root2) {
        searchArray2.push(root2);
        root2 = root2.left;
      }
    }
  };




  let tree1 = new BST();
  let tree2 = new BST();
  tree1.add(10);
  tree1.add(4);
  tree1.add(20);
  tree1.add(60)
  tree1.add(20);
  tree2.add(10);
  tree2.add(100);
  tree2.add(20);
    
  