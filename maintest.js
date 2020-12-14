
class Traveler {
    constructor(name) {
        this.name = name
        this.food = 1
        this.isHealthy = true
    }
    hunt() {
        this.food = this.food + 2
    }
    eat() {
        if (this.food < 1) {
            this.isHealthy = false
        } else {
            this.food = this.food - 1
        }
    }
}

class Doctor extends Traveler {
    constructor(name) {
        super(name)
    }

    heal(traveler) {
        traveler.isHealthy = true
    }
}

class Hunter extends Traveler {
    constructor(name) {
        super(name)
        this.food = 2
    }

    hunt() {
        this.food = this.food + 5
    }

    eat() {
        if (this.food <= 1) {
            this.isHealthy = false
            this.food = this.food - 1
        } else {
            this.food = this.food - 2
        }

    }

    giveFood(traveler, numOfFoodUnits) {
        if (this.food > numOfFoodUnits) {
            traveler.food = traveler.food + numOfFoodUnits
            this.food = this.food - numOfFoodUnits
        }
    }
}

class Wagon {
    constructor(capacity) {
        this.capacity = capacity
        this.passengers = []
    }
    getAvailableSeatCount() {
        return this.capacity - this.passengers.length

    }
    join(traveler) {
        if (this.getAvailableSeatCount() >= 1) {
            this.passengers.push(traveler)
        }
    }
    shouldQuarantine() {
        for (let index = 0; index < this.passengers.length; index = index + 1) {
            let currentpassenger = this.passengers[index]
            if (currentpassenger.isHealthy === false) {
                return true
            }
        }
        return false
    }
    totalFood() {
        let sum = 0
        for (let index = 0; index < this.passengers.length; index = index + 1) {
            let currentpassenger = this.passengers[index]
            sum += currentpassenger.food
        }
        return sum
    }
}

let wagon = new Wagon(2)
// Create three travelers
let henrietta = new Traveler('Henrietta')
let juan = new Traveler('Juan')
let maude = new Traveler('Maude')
console.log(`Wagon Seat Count?: ${ wagon.getAvailableSeatCount() } – EXPECTED: 2. The wagon starts with 2 seats. We haven't added travelers to the wagon yet.`)
wagon.join(henrietta)
console.log(`Wagon Seat Count?: ${ wagon.getAvailableSeatCount() } – EXPECTED: 1. Henrietta just joined.`)
wagon.join(juan)
wagon.join(maude)  // There is no room for her!
console.log(`Wagon Seat Count?: ${ wagon.getAvailableSeatCount() } – EXPECTED: 0 – There is no room for Maude, but Juan was able to join.`)
henrietta.hunt()   // Henrietta goes in search of food.
juan.eat()         // Juan eats – as Juan does. 🤣
juan.eat()         // Juan has run out of food!
console.log(juan)
console.log(`Wagon Should Quarantine?: ${ wagon.shouldQuarantine() } – EXPECTED: true. Juan has run out of food and become unhealthy!`)
console.log(`Wagon's Total Food?: ${ wagon.totalFood() } – EXPECTED: 3.`)