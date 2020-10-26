'use strict'

class Node {
    constructor(value) {
        this.top = null;
        this.next = null;
        this.previous = null;
        this.data = [];
    }
}

class Stack {
    constructor() {
        this.top = null;
    }
    push(data) {
        let newNode = new Node(data);
        newNode.next = this.top;
        this.top = newNode;
        return this.top;
    }
    pop() {
        if(this.top !== null) {
            let topItem = this.top.data;
            this.top = this.top.next;
            return topItem;
        }
    }
    peek() {
        if(!isEmpty) {
            return this.top.data;
        }
    }
    isEmpty() {
        if(this.top === null){
            return true;
        } else {
            return false;
        }
    }

}

class Queue  {
    constructor() {
        this.front = null;
        this.rear = null;
    }

    enqueue(data) {
        let newNode = new Node(data);
        this.rear.next = newNode;
        this.rear = newNode;
        if(!this.front) {
            this.front = this.rear;
        }
    }

    dequeue() {
        let temp = this.front;
        this.front = this.front.next;
        temp.next = null;
        return temp.value;
    }
    isEmpty() {
        if(this.front === null) {
            return true;
        } else {
            return false;
        }
    }
}

