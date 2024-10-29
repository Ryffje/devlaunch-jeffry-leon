function groupAnagrams(strings: string[]){
    const anagramsMap = new Map();

    for (const str of strings){
        const sortedStr = str.split("").sort().join("");

        if (anagramsMap.has(sortedStr)){
            anagramsMap.get(sortedStr).push(str);
        }else{
            anagramsMap.set(sortedStr, [str])
        }
    }

    return anagramsMap;
}

const input = ["listen", "silent", "enlist", "inlets", "google", "gooegl"];
const groupedAnagrams = groupAnagrams(input);
console.log(groupedAnagrams)