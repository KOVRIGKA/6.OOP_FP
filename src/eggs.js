import {ProductItem} from './product-item'

export class Eggs extends ProductItem{
    constructor(item){
        super(item)
        this.deadlineDate = new Date(2019, 11, 8)
        this.cooked = false
    }

    cookEggs () {
        const today = new Date()
        if (today > this.deadlineDate){
            this.cooked = true
        }
    }

    eatEggs () {
        if (this.cooked = true){
            console.log('Кушать подано!')
        }
        else {
            console.log('Испортилось..Выкинь это!')
        }
    }
}