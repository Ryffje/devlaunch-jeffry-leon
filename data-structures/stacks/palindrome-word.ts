function isPalindrome(s: string): boolean {
    const stack: string[] = [];
const normalizedStr = s.replace(/[^a-zA-Z0-9]/gi, '').toLowerCase();

for (const char of normalizedStr){
    stack.push(char);
} 

for (let i = 0; i < normalizedStr.length; i ++){
    if (normalizedStr[i] !== stack.pop()) {
        return false; 
    }


}

return true; 

}

console.log(isPalindrome("A man, a plan, a canal: Panama"));
console.log(isPalindrome("racecar"));  
console.log(isPalindrome( "hello"))