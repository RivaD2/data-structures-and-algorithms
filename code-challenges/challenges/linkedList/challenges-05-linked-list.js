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
        } else {
            //pointer of tail is newNode
            this.tail.next = newNode;
            //tail is now the newNode
            this.tail = newNode;
        }
        this.length++;
        //return list I could say return newNode;
        return this;
    }


    /*
    - The newNode is the new node to be inserted.
    - The existingNode is the node before which the new node is inserted.
    - If the existingNode is null, the insertBefore() inserts the newNode
    at the end of the parentNode‘s child nodes.
    - Adding a new node with the given newValue immediately before the first value node
    */
    insertBefore(value, newValue) {
        let previousNode = this.head;
        let currentNode = previousNode.next;
        while (currentNode !== null) {
            if (currentNode.data === value) {
                const newNode = new Node(newValue);
                newNode.next = currentNode;
                previousNode.next = newNode;
                break;
            }
            previousNode = currentNode;
            currentNode = currentNode.next;
        }
    }

    //Insert the new node by setting its Next value to be equal to the current node's Next value,
    // set the current node's next value to be the new node.

    insertAfter(value, newValue) {
        let currentNode = this.head;
        while (currentNode !== null) {
            if (currentNode.data === value) {
                const newNode = new Node(newValue);
                newNode.next = currentNode.next;
                currentNode.next = newNode;
                break;
            }
            currentNode = currentNode.next;
        }
    }




    /*
    - Defined a method called toString takes in no arguments and returns a string representing all the values in the Linked List, formatted as:
    "{ a } -> { b } -> { c } -> NULL"
    */

    //should show us all items in list
    toString() {
        let output = '';
        let currentNode = this.head;
        while (currentNode) {
            output = `${output} ${currentNode.data} --->`
            currentNode = currentNode.next;
        }
        return `${output} null`;
    }


    KthFromEnd(head, k) {

        let firstPointer = this.head;
        let secondPointer = this.head;

        for (let i = 0; i < k; i++) {
            firstPointer = firstPointer.next;
        }
        while (firstPointer.next !== null) {
            firstPointer = firstPointer.next;
            secondPointer = secondPointer.next;
        }
        const target = secondPointer.next;
        secondPointer.next = target.next;
        target.next = null;

        return secondPointer.next
    }

    // KthFromEnd(data) {
    //     //the data will be the k at the end
    //     let  counter = 0;
    //     let current = this.head;
    //     //if data passed into function is negative, it is not in list
    //     if(data < 0){
    //         return 'the num is negative, please enter positive num';
    //     }
    //     //head needs to not be null
    //     //traverse if head is not null
    //     while(current) {
    //         counter++;
    //         //traversing
    //         current = current.next;
    //     }
    //     //index always starts at 0
    //     //if num is positive, it will count nodes in list, which are saved in counter
    //     let result = counter - 1 - data;
    //     if(result < 0) {
    //         return 'sorry not in list'
    //     }
    //     current = this.head;
    //     while(result > 0) {
    //         result--;
    //         current = current.next;
    //     }
    //     return current.data;
    // }

    llZip(zipList2) {
        //we will return a new list with two lists combined
        //I need to create a new list
        const newList = new LinkedList;
        // I need to hold the length in a var, the length is unknown
        //I have to keep track of both heads;
        // set head to pointer one
        //set head of list two to pointer two
        let pointerOne = this.head;
        let pointerTwo = zipList2.head;
        //open while loop so I can traverse
        while (pointerOne || pointerTwo) {
            if (pointerOne) {
                //will take pointerOne and include it into list
                //I have to make sure I continue through all nodes in list
                newList.append(pointerOne.data);
                pointerOne = pointerOne.next;
            }
            if (pointerTwo) {
                //will take pointerTwo and add it into list
                //I have to make sure I continue through all nodes in list
                newList.append(pointerTwo.data);
                pointerTwo = pointerTwo.next;
            }
        }
        return newList.toString();
    }

}


//change values to data perhaps... here and in print() method
LinkedList.fromValues = function (...values) {
    console.log('from values got values', values)
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
let list2 = new LinkedList();
list.append(3);

list.append(2);

list.append(1);


// const sampleList = LinkedList.fromValues(10, 20, 30, 40, 50);

//now I have two elements or values
// console.log('list.insert');
// list.insert(10);
// console.log('list.insert');
// list.insert(20, 5);
// console.log('list.includes');
// list.includes(10);
// console.log('list.toString');
// list.toString();
console.log(list.KthFromEnd(3));
// list.llZip(list2);
// console.log(list.llZip(list2));


module.exports = LinkedList;