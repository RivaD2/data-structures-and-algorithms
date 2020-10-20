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

    includes(element) {
        let currentNode = this.head;
        let isInList = false;
        //while there is a current node...
        while (currentNode) {
            // if 1st element matches what we passed in
            if (currentNode.element === element) {
                isInList = true;
            }
            console.log('current node',currentNode)
            console.log('next node', currentNode.next);
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
        let currentNode = this.head;
        while ( currentNode) {
            object += `${currentNode.data} --->`;
            currentNode = currentNode.next;
        }
        object += 'null';
        return object;
    }
}

LinkedList.fromValues = function(...values) {
    const linkedList = new LinkedList()
    //loop over values in reverse order
    // I am inserting at beginning, so very first element we insert will be last element in list
    for(let i = values.length - 1; i >= 0; i--) {
        linkedList.insert(values[i]);
    }
    return linkedList;
 };

//empty list
let list = new LinkedList();

//now I have two elements or values
console.log('list.insert');
list.insert(10);
console.log('list.insert');
list.insert(20);
console.log('list.includes');
list.includes(10);
console.log('list.toString');
list.toString();







module.exports = LinkedList;