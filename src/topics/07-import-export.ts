import {Product, taxtCaltulation} from './06-function-destructuring';

const shoppingCard: Product[] = [
    {
        description: 'Nokia',
        price:100
    },
    {
        description: 'iPad',
        price:150
    }
];

const [total, tax] = taxtCaltulation({
    products: shoppingCard,
    tax:0.15
});

console.log('Total: ', total);
console.log('Tax: ', tax );