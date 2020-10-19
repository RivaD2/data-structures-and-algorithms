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
    constructor() {
        this.head = head;
        this.length = 0;
    }
    /*
    - Created insert() method
    - To do this, I need to first create a node
    - The newly created node will have two properties as defined in the constructor function of the Node class
    - These props are data and next
    */
    insert(data) {
        const newNode = new Node(data, this.head);
        this.head = newNode;
        this.length++;
        // this means there are no nodes in linkedList yet...
        if (head === null) {
            head = node;
            // else means there is more than one element in the list
        } else {
            //then start at head or beginning of list
            currentNode = head;
            // if there is a next, not a null,
            while (currentNode.next) {
                //then traverse
                currentNode = currentNode.next;
            }
            // Once we are on last node...
            currentNode.next = node;
        }
    }

    includes(element) {
        let currentNode = head;
        let isInList = false;
        //while there is a current node...
        while (currentNode) {
            index++;
            // if 1st element matches what we passed in
            if (currentNode.element === element) {
                isInList = true;
            }
            currentNode = currentNode.next;
        }
        //element is not in the linkedList
        return isInList;
    }

/*
- Defined a method called toString takes in no arguments and returns a string representing all the values in the Linked List, formatted as:
"{ a } -> { b } -> { c } -> NULL"
*/

    toString() {
        let object = '';
        while (currentNode !== null) {
            object += `${currentNode.data} --->`;
        }
        object += 'null';
        return object;
    }
}

//empty list
let list = new LinkedList();

//now I have two elements or values
list.insert(10);
list.insert(20);
list.includes(10);
list.toString();







module.exports = LinkedList;