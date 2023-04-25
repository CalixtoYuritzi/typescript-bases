export interface Passenger {
    name: string;
    children?: string[];
}

const passenger1: Passenger={
    name: 'Diana',
}

const passenger2: Passenger={
    name: 'Fernando',
    children: ['Matias', 'Luz'],
}


//Inicia el encadenamiento

const printChildren = (passenger: Passenger) =>{
    const howManyChildren = passenger.children?.length || 0;

    console.log(passenger.name,howManyChildren);
}

printChildren (passenger1);
printChildren (passenger2);