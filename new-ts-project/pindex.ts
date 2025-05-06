function firstNonRepeatingChar(s: string): string | null {
    const hash = new Map<string, number>();

    for(let char of s){
        hash.set(char,(hash.get(char) || 0) + 1)
    }

    for (let char of s){
        if(hash.get(char) === 1){
            return char
        }
    }

    return null

    }

console.log(firstNonRepeatingChar("abacabad"))
console.log(firstNonRepeatingChar("aabbcc"))
console.log(firstNonRepeatingChar("swiss"))