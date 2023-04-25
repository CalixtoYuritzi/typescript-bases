interface AudioPlayer {
    audioVolume:number;
    songDuration:number;
    song:string;
    details: Details;
}

interface Details{
    author: string;
    year:number;
}


const audioPlayer: AudioPlayer = {
    audioVolume:90,
    songDuration:36,
    song: "All too well",
    details: {
        author:"Taylor Swift",
        year: 2022
    }
}

// const {}=audioPlayer;

//Desestructuración
// const { song }=audioPlayer;

//Si yo quiero cambiarle el nombre a la variable en la desestructuracion, debo hacer lo siguiente:
//1) poner una constante antes con un nuevo valor, ejemplo:
const song = 'The Way I Loved you';
const { 
    song:anotherSong, 
    songDuration:duration,
    //Opcion 1
    details:{author}
}=audioPlayer;

//Tarea

// console.log('Song: ', song);
// console.log('Song: ', anotherSong);

// console.log('Song: ', audioPlayer.song);
// console.log('Author: ', audioPlayer.details.author);
// console.log('Duration: ', audioPlayer.songDuration);
// console.log('Duration: ', duration);
// console.log('Author: ', author);
// console.log('Duration: ', year);


const [p1, p2, trunks= 'Not found']:string[] = ['Goku', 'Vegeta'];


console.log('Personaje 3: ', trunks );
console.log('Personaje 1: ', p1 );
console.log('Personaje 2: ', p2 );