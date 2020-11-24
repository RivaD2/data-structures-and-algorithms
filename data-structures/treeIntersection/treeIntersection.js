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
  
  let tree = new BST();
  tree.add(10);
  tree.add(4);
    
  