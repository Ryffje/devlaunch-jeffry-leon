function calculateFrequency(numbers: number[]) {
    const frequencyMap = new Map();

    for (const number of numbers){
        if (frequencyMap.has(number)){
            frequencyMap.set(number, frequencyMap.get(number) + 1)
        }else{

            frequencyMap.set(number, 1)
        }
    }

    return frequencyMap;
}

const numbers = [1, 2, 1, 3, 1, 2, 1] 
const frequency = calculateFrequency(numbers);
console.log(frequency);