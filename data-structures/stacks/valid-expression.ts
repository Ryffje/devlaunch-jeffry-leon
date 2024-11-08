function isValidExpression(s: string): boolean {
    const stack: string [] = [];

    const bracketPair: {[key: string]: string} = {
        ')': '(',
        '}': '{',
        ']': '['
    };

    for (let char of s) {
        if (char === '(' || char === '{' || char === '[') {
            stack.push(char);

        } else if (char === ')' || char === '}' || char === ']'){

            if (stack.length === 0 || stack[stack.length -1] !== bracketPair [char]){
                return false;
            }

            stack.pop();
        }

        
    }

    return stack.length ===
}

console.log(isValidExpression("({[]})"));
console.log(isValidExpression("({[])}"));

