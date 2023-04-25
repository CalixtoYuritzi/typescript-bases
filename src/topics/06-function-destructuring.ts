export interface  Product {
    description:string;
    price:number;
}


//Creo 2 objetos
// const phone: Product = {
//     description:'Nokia A1',
//     price: 150.0
// }

// const tablet: Product ={
//     description: 'iPad Air',
//     price: 250.0
// }

interface taxCalculationOptions {
    tax: number;
    products: Product[]
}

//Creamos una función taxtCalculation, la cual retornará un arreglo de numeros
// function taxtCaltulation(options: taxCalculationOptions): number[]{
    export function taxtCaltulation(options: taxCalculationOptions): number[]{
        const {products, tax} = options;
        let total = 0;
    
        products.forEach( ({price}) =>{
            total += price;
        });
        return [total, total = tax];
    }




//Creamos una constante que se llame shoppingCard, el cual tendra como productos a Phone y tablet.
// const shoppingCard = [phone, tablet];
//Tambien tendremos una constante llamada tax (impuesto)
// const tax:number = 0.15;


// const [total, taxResult] = taxtCaltulation({
//     products: shoppingCard,
//     tax: tax,
// });

// console.log('Total: ', result[0]);
// console.log('Tax: ', result[1]);

// console.log('Total: ', total);
// console.log('Tax: ', taxResult);
