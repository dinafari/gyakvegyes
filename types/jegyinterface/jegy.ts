/* 3. TypeScript – Tömb + átlag számítás
    Hozz létre egy Jegy nevű interfészt:

    tantargy: string

    jegy: number

    Adj hozzá legalább 4 jegyet, majd készíts egy függvényt, amely:

    kiszámolja az átlagot

    és visszaadja, hogy „Sikeres” ha az átlag legalább 2.5, különben „Sikertelen”


*/

interface Jegy{
    tantargy:string;
    jegy:number;
}

const jegy1:Jegy={
    tantargy:"Matematika",
    jegy:5

}
console.log(jegy1);

const jegy2:Jegy={
    tantargy:"Kémia",
    jegy:4,
}
console.log(jegy2);

const jegy3:Jegy={
    tantargy:"Irodalom",
    jegy:3,

}
console.log(jegy3);


const jegy4:Jegy={
    tantargy:"Fizika",
    jegy:2,

}
console.log(jegy4);


const jegyek:Jegy[]=[jegy1,jegy2,jegy3,jegy4];

function atlagSikerVsSikertelen(jegyek:Jegy[]):{ atlag: number; eredmeny: string }{

    

    const osszeguk= jegyek.reduce((acc,jegy)=>acc+ jegy.jegy,0);
    const  atl= osszeguk/jegyek.length;

    
    return{
        atlag:atl,
        eredmeny:atl >=2.5 ? "Sikeres" :"sikertelen"
        
    };
        

    
    
  

    


}
console.log(atlagSikerVsSikertelen(jegyek));


