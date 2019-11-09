import {ProductItem} from './product-item'

export class Bread extends ProductItem{
    constructor(item){
        super(item)
        this.deadlineDate = new Date(2019, 11, 8)
        this.cut = false
    }

    cutBread () {
        const today = new Date()
        if (today > this.deadlineDate){
            this.cut = true
        }
    }

    eatBread () {
        if (this.cut = true){
            console.log('Кушать подано!')
        }
        else {
            console.log('Испортилось..Выкинь это!')
        }
    }
}