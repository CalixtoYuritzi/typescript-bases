function addNumbers(a:number, b:number){
    return a+b;
}

// const result= addNumbers(1,2).toString();//.toString nos permiter cambiar un valor number a string
 const addNumbersArrow = (a:number, b:number):string=>{
    return `${a+b}`;
 }

function multiply(firstNumber:number, secondNumber?:number, base:number=5){
    return firstNumber*base;
}



interface Character{
    name: string,
    hp: number,
    //Despues de la propiedad viene la definicion del tipo ya sea number, pero en este caso será una función de flecha, seguido del valor de retorno, en este caso será void, osea no tiene que refresar nada.
    showUp: () => void;
}


const healCharacter = (character: Character, amount:number) =>{

    character.hp += amount;
}

const strider: Character={
    name: 'Aragon',
    hp:50,
    //Vamos a definir nuestro metodo, el cual le colocaremos un console.log que diga los puntos de vida
    showUp(){
        //this, hace referencia al objeto
        console.log(`Punto de vida ${ this.hp}`);
    }
}

healCharacter(strider, 10);
strider.showUp();

// const result:number= addNumbers(1,2);
// const result2:string= addNumbersArrow(1,2);
// const multiplyResult:number = multiply(5);
// console.log({result, result2, multiplyResult}) //Se puso con llaves para que lo imprima como un objeto


export{};