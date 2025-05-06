function areAnagrams(str1: string, str2: string): boolean{

const hash1 = new Map<string, string>();

for(let char of str1 && str2){
    hash1.set(char, str1 && str2)
    hash1.get
   
}

if(str1 === str2){
    return true



}
return false


}

console.log(areAnagrams("listen", "silent"))
console.log(areAnagrams("hello", "world"))
