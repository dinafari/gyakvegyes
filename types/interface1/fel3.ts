//4. Készíts egy Tanulo interfészt, számold ki a tanuló átlagát

interface Tanulo{


    nev:string;
    osztalyzat:number;
    tantargy:string;

}

const tantargy1:Tanulo={
    nev:"Kiss Pista",
    osztalyzat:5,
    tantargy:"matematika",
};
console.log(tantargy1);

const tantargy2:Tanulo={
    nev:"Kiss Pista",
    osztalyzat:4,
    tantargy:"fizika",
    

}
console.log(tantargy2)

const tantargy3:Tanulo={
    nev:"Kiss Pista",
    osztalyzat:3,
    tantargy:"földrajz",
    

}
console.log(tantargy3)

const tantargyak:Tanulo[]=[tantargy1,tantargy2,tantargy3];

//Ezt itt még fejezd be!

function atlaga(tantargyak:Tanulo[]):number{

 

    const osszeguk= tantargyak.reduce((acc,osztalyzat)=>acc + tanulo.osztalyzat,0);
    return osszeguk/tantargyak.length;
}
console.log("Átlag:", atlaga(tantargyak).toFixed(2));

