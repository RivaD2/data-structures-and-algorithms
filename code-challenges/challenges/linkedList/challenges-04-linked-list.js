'use strict'

//Step 1: Create a Node class that has properties for the value stored in the Node, and a pointer to the next Node.
                                                       //node                node
// [head pointer] ---> [head node][1(info), link]---> [2(info), link]---> [3(info), link to next]--->Null
class Node {
    constructor(data, next = null ) {
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
    }
}
let list = new LinkedList();

/*
- Created insert() method
- To do this, I need to first create a node
- The newly created node will have two properties as defined in the constructor function of the Node class
- These props are data and next
*/
this.insert = function(data) {
    //creating new Node
    let Node = new Node(data);
    // this means there are no nodes in linkedList yet...
    if(head === null) {
        head = node;
        // else means there is more than one element in the list
    } else {
        //then start at head or beginning of list
        currentNode = head;
        // if there is a next, not a null,
        while(currentNode.next) {
            //then traverse
           currentNode = currentNode.next;
        }
        // Once we are on last node...
    currentNode.next = node;
    }
    //increment length
length++;
};

this.includes = function(element) {
    let currentNode = head;
    let index = -1;
    //while there is a current node...
    while(currentNode) {
        index++;
        // if 1st element is what we pass in...
        if(currentNode.element === element) {
            return index;
        }
        currentNode = currentNode.next;
    }
    //element is not in the linkedList
    return -1;
};

/*
- Defined a method called toString takes in no arguments and returns a string representing all the values in the Linked List, formatted as:
"{ a } -> { b } -> { c } -> NULL"
*/
this.toString = function() {
    //template literal
    //include current value and add arrow
    let object = '';
    while(currentNode !== null) {
        object += `${currentNode.data} --->`;
    }
    object += 'null';
    return object;
}

