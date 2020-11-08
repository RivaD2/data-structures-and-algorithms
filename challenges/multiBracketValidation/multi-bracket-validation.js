'use strict';

let multiBracketValidation = str => {
    let stack = [];
    let parenList = {
        '(': ')',
        '[': ']',
        '{': '}'
    }

for(let i = 0; i < str.length; i++) {
    //opening brace needs to be added to stack([])
    if(str[i].includes(parenList)) {
        stack.push(str[i]);
    }
    else {
        //if closing brace, remove from stack. This will shorten length of stack
        let lastItem = stack.pop();
        //if popped element or last brace doesn't match closing brace from list, return false
        if(str[i] !== parenList[lastItem]) {
            return false;
        }
    }
}
    //After looping through and checking all brackets, if stack is not empty then false
    if(stack.length !== 0) {
        return false
    };
    return true;
}
console.log(multiBracketValidation("(){}[]"));
console.log(multiBracketValidation("[{()()][))"));