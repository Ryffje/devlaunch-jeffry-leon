function reverseString(inputString: string): string{
    let stack: string [] = [];

    for (let i = 0; i < inputString.length; i++){
        stack.push(inputString[i]);
    }

    let reverseString = '';
    while (stack.length > 0){
        reverseString += stack.pop();
    }

    return reverseString
}

console.log(reverseString("Hello World!"));
