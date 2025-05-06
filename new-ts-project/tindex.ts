class TemperatureDate {
    id: number
    recordDate: Date
    temperature: number

    constructor(id: number, recordDate: Date, temperature: number){
        this.id = id
        this.recordDate = recordDate
        this.temperature = temperature
    }
}


function findHigherTemperature(weatherTable: TemperatureDate[]): number[]{
    let ids = []
    for(let i = 0; i < weatherTable.length; i++){
        if(i > 0 && weatherTable[i-1].temperature < weatherTable[i].temperature)
            ids.push(weatherTable[i].id) 

    }

    
return ids
    

}


const weatherTable = [
    new TemperatureDate(1, new Date ("2015-01-01"), 10),
    new TemperatureDate(2, new Date ("2015-01-02"), 25),
    new TemperatureDate(3, new Date ("2015-01-03"), 20),
    new TemperatureDate(4, new Date ("2015-01-04"), 30),
    
]

console.log(findHigherTemperature(weatherTable))