'use strict';


const LinkedList = require('./challenges-05-linked-list.test.js');

describe('Testing Challenge 05', () => {
    const linkedList = new LinkedList();

   it('Can successfully instantiate an empty linked list', () => {
        expect(linkedList.start).toBeNull();
        expect(linkedList.end).toBeNull();
    });

    it('Insert method can properly insert into linked list', () => {
            linkedList.insert(10);
            expect(linkedList.head.data).toEqual(10);

        })
});

// let result = linkedList.includes('list');
// assert.equal(JSON.stringify(result), '{"element":10,"next":null}')