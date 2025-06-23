// 1.Készíts egy függvényt, ami visszaadja a 10 és 100 közötti páratlan számok összegét
// Pl: [5, 12, 27, 99, 102, 3] → 27 + 99 = 126
function paratlTizSzaz(szamok: number[]): number {
  let osszeg: number = 0;

  for (let szam of szamok) {
    if (szam > 10 && szam < 100 && szam % 2 !== 0) {
      osszeg += szam;
    }
  }

  return osszeg;
}

const szamtomb: number[] = [5, 12, 27, 99, 102,];
const eredmeny = paratlTizSzaz(szamtomb);
console.log("Összeg:", eredmeny); // 126

//Filterrel és reducc-alugyan ez:
/*function paratlanOsszegFilterReduce(tomb: number[]): number {
  return tomb
    .filter(szam => szam > 10 && szam < 100 && szam % 2 !== 0)
    .reduce((osszeg, aktualis) => osszeg + aktualis, 0);
   
}

// Tesztelés:
const bemenet = [5, 12, 27, 99, 102, 3];
const eredmeny = paratlanOsszegFilterReduce(bemenet);
console.log("Az összeg:", eredmeny); // 126 */



 


//2. Készíts egy függvényt, amely megszámolja, hány páros és hány páratlan szám van egy tömbben
// Kimenet: { paros: 3, paratlan: 2 }

const tomb:number[]=[2,3,8,9,10];

function parospartl(tomb:number[]):{paros:number,paratlan:number}{
    const paratlan= tomb.filter((szam)=>szam %2 !==0).length;
    const paros = tomb.filter((szam)=>szam % 2==0).length;
    return{
        paratlan,
        paros
    };

}
console.log(parospartl(tomb));

//3. Készíts egy függvényt, amely visszaadja a Fibonacci sorozat első 5 páros számát
// Pl: [2, 8, 34, 144, 610]

function fibonParos(n:number):number[]{
    let szam:number =5;

    let  elsosz:number=0;
    let masodiksz:number =1;
    const paroseredm:number[]=[];

    while(paroseredm.length < n){
       
        const kovetkszam:number= elsosz+ masodiksz;

        if(kovetkszam % 2 ===0){
            paroseredm.push(kovetkszam);

        }
        elsosz= masodiksz;
        masodiksz= kovetkszam;
    }
    
    return paroseredm.slice(0,szam);//az elso 5 szamot adja  visza szam= 5;


}

console.log(fibonParos(5));

//vagy csak simánígy , mert amúgy is 5 számot kérek vissza nem kell itt sliceolni

/*function fibonParos(n: number): number[] {
  let elso: number = 0;
  let masodik: number = 1;
  const parosEredmeny: number[] = [];

  while (parosEredmeny.length < n) {
    const kovetkezo: number = elso + masodik;

    if (kovetkezo % 2 === 0) {
      parosEredmeny.push(kovetkezo);
    }

    elso = masodik;
    masodik = kovetkezo;
  }

  return parosEredmeny;
}

console.log(fibonParos(5)); // [2, 8, 34, 144, 610]*/



// 4.Készíts egy függvényt, amely visszaadja a tömb azon elemeit, amelyek kisebbek az átlaguknál
// Pl: [5, 10, 15, 20] → Átlag: 12.5 → Kimenet: [5, 10]

const szt:number[]=[5, 10, 15, 20];

function altAg(szt:number[]):number[]{
   
    const  osszeguk =szt.reduce((acc:number,curr:number)=>acc+ curr);//összeadom a tömb elemeit
    const atl=osszeguk/szt.length;//itt megkapom az átlagot
    const kisebb= szt.filter((szam)=>szam < atl);//tömböt ad vissza ami kisebb mint az átlag
    return  kisebb;
   
     
    
}
console.log(altAg(szt));

//Vagy így is lehet rövidebben:

/*function kisebbMintAtlag(tomb: number[]): number[] {
  const atlag = tomb.reduce((a, b) => a + b, 0) / tomb.length;
  return tomb.filter(szam => szam < atlag);
}˛*/

