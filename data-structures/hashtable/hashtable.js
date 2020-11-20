'use strict';

class HashTable {
    constructor(size) {
        this.size = size;
        this.storage = new Array(size);
    }
    hash(str, n) {
        let sum = 0;
        for(let i = 0; i <str.length; i++ ) {
            sum += str.charCodeAt(i) * 299;
        }
        return sum % n
    }

    set(key, value) {
        let index = this.hash(key);
        if(!this.storage[index]) {
            this.storage[index] = new LinkedList();
        }
        this.storage[index].add({ [key]: value })
    }
}

class LinkedList {
    constructor() {
        this.head = null
    }
    
    add(value) {
        const newNode = new Node(value);
        if(!this.head) {
            // Value is a new node
            this.head = newNode;
        }
        let current = this.head;
        // Traversal
        while(current) {
            if(current.next === null) {
                current.next = newNode;
            }
            current = current.next;
        }
    }

    values() {

    }
}

class Node {
    constructor(value) {
        // This will be a key value pair
        this.value = value;
        this.next = null;
    }
}