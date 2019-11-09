import {ProductItem} from './product-item'

export class Milk extends ProductItem{
    constructor(item){
        super(item)
        this.deadlineDate = new Date(2019, 11, 8)
        this.poured = false
    }

    pourMilk () {
        const today = new Date()
        if (today > this.deadlineDate){
            this.pored = true
        }
    }

    drinkMilk () {
        if (this.poured = true){
            console.log('Кушать подано!')
        }
        else {
            console.log('Испортилось..Выкинь это!')
        }
    }
}