'use strict';

const Stack = require("../stacksAndQueues/stacks-and-queues");

class PseudoQueue {
    constructor() {
        //start with two stacks
        this.pushStack = new Stack();
        this.popStack = new Stack();
        this.size = 0;
    };
    //use the stacks to shuffle around values and use only push/pop 
    // for enqueue, we need to append, or addd something to the end
    enqueue(value) {
        this.pushStack.push(value);
        this.size = this.pushStack.length + this.popStack.length;
    }
    //remove elements from the beginning
    //loop through all the elements of our first stack
    //pop them from the first, then push them into the second
    //return element to be removed
    dequeue(){
        if(this.popStack.length > 0) {
            this.size = this.pushStack.length + this.popStack.length - 1;
            return this.popStack.pop();
        }
        while(this.pushStack.length > 0) {
            this.popStack.push(this.pushStack.pop());
        }
        this.size = this.pushStack.length + this.popStack.length -1;
        return this.popStack.pop();
    }
    peek() {
        if(this.pushStack.length > 0) {
            return pushStack[0];
        }
        return this.popStack[this.pushStack.length - 1];
    }

}