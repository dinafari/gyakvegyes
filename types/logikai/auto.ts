//1. Interfész: Auto (tipus, evjarat, ar)
//Adj hozzá 3 autót, számold ki az átlagárat




interface Auto{
    nev:string;
    evjarat:number;
    ara:number;

}

const auto1:Auto={
    nev:"Audi",
    evjarat:1990,
    ara:650000,

}
console.log(auto1);

const auto2:Auto={
    nev:"BMW",
    evjarat:2020,
    ara:975000,

}
console.log(auto2);


const auto3:Auto={
    nev:"Toyota",
    evjarat:2024,
    ara:880000,

}
console.log(auto3);

const autok:Auto[]=[auto1,auto2,auto3];
console.log(autok);

function atlagAruk(autok:Auto[]):number{
    const ossz= autok.reduce((acc,auto)=>acc + auto.ara,0);
    const atl=ossz/autok.length;
    return atl;

}
console.log(atlagAruk(autok));