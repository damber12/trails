class Traveler {
    constructor(name){
        this.name = name;
        this.food = 1;
        this.isHealthy = true;
    }
    hunt(){
        this.food += 2;
    }
    eat(){

        if(this.food ===0){
            this.isHealthy = false;
        } else{
            this.food -=1;
        }
    }
    generate(){
        this.element = 1;
    }
}
class Wagon {
    constructor(c){
        this.capacity = c;
        this.passenger = [];
    }

    getAvailableSeatCount(){
        return this.capacity - this.passenger.length
    }
    join(traveler){
        if(this.getAvailableSeatCount){
            this.passenger.push(traveler)
        }
    }
    shouldQuarantine(){
        return this.passenger.some(passenger => !passenger.isHealthy)
    }
    totalFood(){
        let count = 0
        for (let n = 0; n < this.passenger.length; n++){
            const traveler = this.passenger[n];
            count += traveler.food
        }
            return count
        }
    }