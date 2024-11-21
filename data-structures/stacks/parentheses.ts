function isBalancedParentheses(s: string): boolean {
    const stack: string [] = [];

    const parenthesesMap: {[key: string]: string} = {
        ')': '(',
        '}': '{',
        ']': '['
    };

    for (let char of s) {
        if (char === '(' || char === '{' || char === '[') {
            stack.push(char);
        }

        else if (char === ')' || char === '}' || char === ']') {
            if (stack.length === 0 || stack.pop() !== parenthesesMap[char]){
                return false;
            }
    }

}

return stack.length === 0;

}

console.log(isBalancedParentheses("(()))"));
console.log(isBalancedParentheses("((()))"));

