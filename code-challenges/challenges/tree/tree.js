'use strict'

class Node {
    constructor(value) {
        this.value = value;
        this.left = null;
        this.right = null;
    }
}

class BinarySearchTree {
    constructor() {
        //empty root
        this.root = null;
    }
    add(value) {
        let newNode = new Node(value);
        if(this.root === null) {
            this.root = newNode;
            return this;
        } else {
            //process involves looping just like in linkedlist
            //starting in head and updating current as I go
            let current = this.root;
            while(true) {
                //handling duplicates so we don't get an infinite loop
                if(value === current.value) return undefined;
                 //check if value is less than or greater than
                if(value < current.value) {
                    //if there is no left, insert node
                    if(current.left === null) {
                        current.left = newNode;
                        return this;
                        //moving to left because value is less than current value
                        //if there already is a left, then chunk under wile loop will not run
                    } else {
                        current = current.left;
                    }
                    //Need to check the right side now
                } else if(value > current.value) {
                    //if right is null, then I've found my spot
                    if(current.right === null) {
                        current.right === newNode;
                        return this;
                        //otherwise keep looking
                    } else {
                        current = current.right;
                    }
                }
            }
        }
    }
    contains(value) {
        if(this.root === null) return false;
        let current = this.root;
        present = false;
        //while there is something to loop over and while I haven't found it
        //as soon as there is no current, loop will stop
        while(current && !present) {
                //if value is less than current, move to left
            if(value < current. value) {
                current = current.left;
            } else if(value > current.value) {
                current = current.right;
            } else {
                return true;
            }
        }
        return false;
    }
}


let tree = new BinarySearchTree();
tree.add(10);
tree.add(5);
tree.add(13);
tree.add(13);
tree.add(11);
tree.add(16);
tree.add(7);
tree.contains(5);
tree.contains(2);

//have some nodes that are connected and values to left and right
