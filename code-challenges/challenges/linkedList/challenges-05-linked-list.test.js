'use strict';


const LinkedList = require('./challenges-05-linked-list.js');

describe('Testing Challenge 05', () => {
    const linkedList = new LinkedList();

   test('Can successfully instantiate an empty linked list', () => {
        expect(linkedList.head).toBeNull();
        expect(linkedList.length).toBe(0);
    });

    test('Insert method can properly insert into linked list', () => {
        const linkedList = new LinkedList();
            linkedList.insert(10);
            const oldHead = linkedList.head;
            linkedList.insert(20);
            expect(linkedList.head.data).toBe(10);
            expect(oldHead.next.data).toBe(20);
            expect(linkedList.length).toBe(2);

        });
});

    describe('Testing includes method to see whether value passed as arg exist as a Node in the list', () => {
        test('it returns false', () => {
            const linkedList = new LinkedList()
        })
    })