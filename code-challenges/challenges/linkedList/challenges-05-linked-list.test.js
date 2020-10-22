'use strict';


const LinkedList = require('./challenges-05-linked-list.js');

describe('Testing Challenge 05', () => {
    const linkedList = new LinkedList();

   test('Can successfully instantiate an empty linked list', () => {
        expect(linkedList.head).toBeNull();
        expect(linkedList.length).toBe(0);
    });

    test('Testing if insert method can properly insert into linked list', () => {
        const linkedList = new LinkedList();
            linkedList.insert(10);
            const oldHead = linkedList.head;
            linkedList.insert(20);
            expect(linkedList.head.data).toBe(10);
            expect(oldHead.next.data).toBe(20);
            expect(linkedList.length).toBe(2);

        });
});

    describe('Testing toString Method', () => {
        test('Whether method adds a new node with given newValue immediately after the first value node', () => {
            const linkedList = new LinkedList();
            linkedList.append(1);
            linkedList.append(4);
            linkedList.append(5);
            expect(linkedList.toString()).toEqual(' 1 ---> 4 ---> 5 ---> null');
        })
    });

    describe('Testing includes method', () => {
        test('Whether value passed as arg exist as a Node in the list', () => {
            const linkedList = new LinkedList();
            linkedList.insert(5);
            expect(linkedList.includes(10)).toBe(false);
            linkedList.insert(10);
            expect(linkedList.includes(10)).toBe(true);
        })
    })

    describe('appends method', () => {
        test('Whether method add value to end of list', () => {
            const linkedList = new LinkedList();
            linkedList.append(6);
            expect(linkedList.tail.data).toEqual(6);
            linkedList.append(9);
            expect(linkedList.tail.data).toEqual(9);
        })
    });

    describe('insertBefore', () => {
        test('Whether method adds a new node with  given newValue immediately before the first value node', () => {
            const linkedList = new LinkedList();
            linkedList.append(1);
            linkedList.append(2);
            linkedList.append(3);
            expect(linkedList.toString()).toEqual(' 1 ---> 2 ---> 3 ---> null');
            linkedList.insertBefore(3, 5);
            expect(linkedList.toString()).toEqual(" 1 ---> 2 ---> 5 ---> 3 ---> null");
        })
    });

    describe('insertAfter', () => {
        test('Whether method adds a new node with given newValue immediately after the first value node', () => {
            const linkedList = new LinkedList();
            linkedList.append(1);
            linkedList.append(2);
            linkedList.append(3);
            expect(linkedList.toString()).toEqual(' 1 ---> 2 ---> 3 ---> null');
            linkedList.insertAfter(3, 5);
            expect(linkedList.toString()).toEqual(" 1 ---> 2 ---> 3 ---> 5 ---> null");
        })
    });

    /*New tests for challenge 7:
    - Where k is greater than the length of the linked list
    - Where k and the length of the list are the same
    - Where k is not a positive integer
    - Where the linked list is of a size 1
    - “Happy Path” where k is not at the end, but somewhere in the middle of the linked list
    */
   describe('removeKthFromEnd', () => {
    test('Whether k is greater than the length of the linked list', () => {
        const linkedList = new LinkedList();
        linkedList.append(1);
        linkedList.append(2);
        linkedList.append(3);
        linkedList.append(4);
        expect(linkedList.removeKthFromEnd(k)).toEqual();

    })
});