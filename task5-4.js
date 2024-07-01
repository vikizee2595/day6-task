class UberPriceCalculator {
    constructor(baseFare, costPerMinute, costPerMile, minimumFare, surgeMultiplier = 1) {
        this.baseFare = baseFare;
        this.costPerMinute = costPerMinute;
        this.costPerMile = costPerMile;
        this.minimumFare = minimumFare;
        this.surgeMultiplier = surgeMultiplier;
    }

    calculateFare(minutes, miles) {
        let fare = this.baseFare + (this.costPerMinute * minutes) + (this.costPerMile * miles);
        fare *= this.surgeMultiplier;
        return Math.max(fare, this.minimumFare);
    }

    getBaseFare() {
        return this.baseFare;
    }

    setBaseFare(baseFare) {
        this.baseFare = baseFare;
    }

    getCostPerMinute() {
        return this.costPerMinute;
    }

    setCostPerMinute(costPerMinute) {
        this.costPerMinute = costPerMinute;
    }

    getCostPerMile() {
        return this.costPerMile;
    }

    setCostPerMile(costPerMile) {
        this.costPerMile = costPerMile;
    }

    getMinimumFare() {
        return this.minimumFare;
    }

    setMinimumFare(minimumFare) {
        this.minimumFare = minimumFare;
    }

    getSurgeMultiplier() {
        return this.surgeMultiplier;
    }

    setSurgeMultiplier(surgeMultiplier) {
        this.surgeMultiplier = surgeMultiplier;
    }
}

const baseFare = 2.00; 
const costPerMinute = 0.20; 
const costPerMile = 1.50; 
const minimumFare = 5.00; 
const surgeMultiplier = 1.5; 

const uberPriceCalculator = new UberPriceCalculator(baseFare, costPerMinute, costPerMile, minimumFare, surgeMultiplier);

const tripMinutes = 15; 
const tripMiles = 10; 

const fare = uberPriceCalculator.calculateFare(tripMinutes, tripMiles);
console.log(`The fare for the trip is $${fare.toFixed(2)}`); 
