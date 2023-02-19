// Prices class 
class Price {
    constructor(buy, sell, pair) {
        this.buy = buy 
        this.sell = sell
        this.pair = pair
    }

    //get mid price
    mid() {
        return (this.buy + this.sell)/200
    }

    //get currency from pair
    quote() {
        return this.pair.substring(3)
    }

}

class DataSourceConnector {

    // constructor to store the url of data end point
    constructor(url) {
        this.url = url;
    }

    // fetch data from data end point and store in array
    async getPrices() {
        let arr = []
        const result = await fetch(this.url).then(
            response => response.json()
        ).then(res => {
            for (let i = 0; i < res.data.prices.length; i++) {
                const current = res.data.prices[i]
                arr.push(new Price(current.buy, current.sell, current.pair))
            }
        })
        return arr
    }

} 

const ds = new DataSourceConnector("https://interview.switcheo.com/test.json");

ds.getPrices()
    .then(prices => {
        prices.forEach(price => {
            console.log(`Mid price for ${ price.pair } is ${ price.mid() } ${ price.quote() }.`);
        });
    }).catch(error => {
        console.error(error);
    });