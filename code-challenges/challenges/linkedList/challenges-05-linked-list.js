'use strict'

//Step 1: Create a Node class that has properties for the value stored in the Node, and a pointer to the next Node.

class Node {
    constructor(data, next = null) {
        this.data = data;
        this.next = next;
    }
}

/*
 -Step 2: Created LinkedList class, and included a head property.
- Upon instantiation, an empty Linked List should be created.
- The head pointer is assigned a value of null because when a linked list object is
initially created it does not contain any nodes.
- It is when we add our first node to the linked list, we will assign it to the head pointer.
*/
class LinkedList {
    constructor(head = null) {
        this.head = head;
        this.length = 0;
        this.tail = null
    }
    /*
    - Created insert() method
    - To do this, I need to first create a node
    - The newly created node will have two properties as defined in the constructor function of the Node class
    - These props are data and next
    */



    insert(data) {
        const newNode = new Node(data);
        this.length++;
        // this means there are no nodes in linkedList yet...
        if (this.head === null) {
            this.head = newNode;
            // else means there is more than one element in the list
        } else {
            //then start at head or beginning of list
            let currentNode = this.head;
            // if there is a next, not a null,
            while (currentNode.next) {
                //then traverse
                currentNode = currentNode.next;
            }
            // Once we are on last node...
            currentNode.next = newNode;
        }
    }

    includes(data) {
        let currentNode = this.head;
        let isInList = false;
        //while there is a current node...
        while (currentNode) {
            // if 1st element matches what we passed in
            if (currentNode.data === data) {
                isInList = true;
            }
            console.log('current node', currentNode)
            console.log('next node', currentNode.next);
            currentNode = currentNode.next;
        }
        //element is not in the linkedList
        return isInList;
    }


    isEmpty() {
        return !this.head || this.length === 0;
    }
    /*
    - If the list is empty then add an element and it will be the  head
    - If the list is not empty then iterate to the end of the list and add an element at the end of the list
    */
    append(data) {
        const newNode = new Node(data);
        if (this.isEmpty()) {
            this.head = this.tail = newNode;
        }
        else {
            //pointer of tail is newNode
        this.tail.next = newNode;
        //tail is ow the newNode
        this.tail = newNode;
        }
        this.length++;
        //return list
        return this;
    }


        /*
    - The newNode is the new node to be inserted.
    - The existingNode is the node before which the new node is inserted.
    - If the existingNode is null, the insertBefore() inserts the newNode
    at the end of the parentNode‘s child nodes.
    - Adding a new node with the given newValue immediately before the first value node
    */




    /*
    - Defined a method called toString takes in no arguments and returns a string representing all the values in the Linked List, formatted as:
    "{ a } -> { b } -> { c } -> NULL"
    */

    //should show us all items in list
    toString() {
        let output = '';
        let currentNode = this.head;
        while (currentNode) {
            output = `${output} ${currentNode.value} --->`
            currentNode = currentNode.next;
        }
        console.log(`${output} null`)
    }

}


//change values to data perhaps... here and in print() method
LinkedList.fromValues = function (...values) {
    const linkedList = new LinkedList()
    //loop over values in reverse order
    // I am inserting at beginning, so very first element we insert will be last element in list
    for (let i = values.length - 1; i >= 0; i--) {
        linkedList.insert(values[i]);
    }
    return linkedList;
};


//intializing empty list
let list = new LinkedList();

const sampleList = LinkedList.fromValues(10, 20, 30, 40);

// now I have two elements or values
console.log('list.insert');
list.insert(10);
console.log('list.insert');
list.insert(20, 5);
console.log('list.includes');
list.includes(10);
console.log('list.toString');
list.toString();







module.exports = LinkedList;