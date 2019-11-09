import {ProductItem} from './product-item'

export class Beer extends ProductItem{
    constructor(item){
        super(item)
        this.deadlineDate = new Date(2019, 11, 8)
        this.poured = false
    }

    pourBeer () {
        const today = new Date()
        if (today > this.deadlineDate){
            this.poured = true
        }
    }

    drinkBeer () {
        if (this.poured = true){
            console.log('Кушать подано!')
        }
        else {
            console.log('Испортилось..Выкинь это!')
        }
    }
}