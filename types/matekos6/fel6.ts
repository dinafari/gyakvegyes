//Készíts függvényt, amely kiszámolja a páros számok átlagát egy tömbben.
//Pl.: [2, 3, 4, 5] → (2+4)/2 = 3

const szambtomb:number[]=[2, 3, 4, 5];

function parosAtl(szambtomb:number[]):number{

    const paros=szambtomb.filter((szam)=>szam %2 ===0);
    const osszeguk= paros.reduce((acc,curr)=>acc+curr,0);
    return osszeguk/paros.length;

}
console.log("A páros számok átlaga a szamtomben:",parosAtl(szambtomb));