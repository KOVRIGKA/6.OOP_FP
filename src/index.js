import axios from 'axios'

import { ProductItem } from './product-item'
import totalWeight from './total-weight'
import totalNumber from './total-number'
import totalColor from './total-color'
import getCost from './get-cost'
import getNumber from './get-number'
import getWeight from './get-weight'
import style from './style.css'

axios({
    method: 'get',
    url: '/api/list'
})
    .then((response) => {
        ProductItem.rofl()
        const list = response.data.map((item) => new ProductItem(item))
        return Promise.resolve(list)
    })
    .then((list) => {
        // Работа со списком параметров корзины
        const statisticsNode = document.createElement('dl')
        statisticsNode.classList.add(style.statistics)

        // Суммарный вес потребительской корзины
        statisticsNode.innerHTML = `<dt>Количество наименований в корзине</dt>` +
            `<dd class=${style.term}>${getNumber(list)} шт</dd>` +
            `<dt> Количество продуктов в корзине</dt>` +
            `<dd class=${style.term}>${totalNumber(list)} шт</dd>` +
            `<dt>Суммарный вес корзины</dt>` +
            `<dd class=${style.term}>${totalWeight(list)} ru</dd>` +
            `<dt>Цвет корзины</dt>` +
            `<dd class=${style.term}>${totalColor(list)}</dd>` +
            `<dt>Стоимость каждого наименования в корзине</dt>` +
            `<dd class=${style.term}>${getCost(list)} руб</dd>` +
            `<dt>Вес каждого продукта в корзине</dt>` +
            `<dd class=${style.term}>${getWeight(list)} кг</dd>` +
            // TODO: перенести в парсеры и сделать в виде ФП
        document.body.appendChild(statisticsNode)
    })
    .catch(() => {
        document.body.innerHTML = 'Сервис недоступен!'
    })
