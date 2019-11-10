import _ from 'lodash'

//Посчитать количество продуктов в корзине 

export default (list) => _.reduce(list, (acc, curr) => acc + curr.params.count, 0)