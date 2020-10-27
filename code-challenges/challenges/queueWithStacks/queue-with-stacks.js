'use strict';

class PseudoQueue {
    constructor() {
        //start with two stacks
        this.stackOne = [];
        this.stackTwo = [];
    };
    //use the stacks to shuffle around values and use only push/pop 
    // for enqueue, we need to append, or addd something to the end
    enqueue(value) {
        this.stackOne.push(value);
    }
    //remove elements from the beginning
    //loop through all the elements of our first stack
    //pop them from the first array, then push them into the second array
    //return element to be removed
    dequeue(){
        while(this.stackOne.length > 0) {
            this.stackTwo.push(stackOne.pop());
        }
        return this.stackTwo.pop();
    }
    //I can only enqueue once here 
    //if I want to enqueue again, I will need to check if values are in second array
    //if they are, then I need to put them back into first
    // Use for loop to run only if stackTwo has the values and then put them into stack one
    enqueue(value) {
        for(let i = 0; i < this.stackTwo.length; i++) {
            this.stackOne.push(this.last.pop())
        }
        this.stackOne.push(value);
    }
}