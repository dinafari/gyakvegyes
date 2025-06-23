
//TypeScript – 3 feladat:
//1. Tömb minden második elemének összege
//Írj egy függvényt, amely visszaadja a tömb minden második elemének összegét!
//Példa: [10, 20, 30, 40] → 20 + 40 = 60


const tomb:number[]=[10, 20, 30, 40];

function mindenMasodikOsszege(tomb:number[]):number{

  //A feladat példája alapján: [10, 20, 30, 40] → 20 + 40 = 60, tehát a 1-es és 3-as indexűek 
  // (azaz minden második elem, nem a 0-indexűek).
    
  const masodik = tomb.filter((_, index) => index % 2 === 1);
  return masodik.reduce((a, b) => a + b, 0);
   

}
console.log(mindenMasodikOsszege(tomb)); // → 60

//2. Három szám legnagyobb szorzata
//Írj egy függvényt, amely visszaadja a három szám közül a két legnagyobb szám szorzatát!
//  Példa: 3, 7, 2 → 7×3 = 21

function legnSzamokSzorz(x:number,y:number,z:number):number{
   const tomb1=[x,y,z].sort((a,b)=>b-a); // csökkenő sorrendbe , hogy könnebb legyen válogatni
   return tomb1[0] * tomb1[1];// két legnagyobb az indexe alapján

}
console.log(legnSzamokSzorz(3,7,2));// → 21

//3. Megadott szám előfordulásai tömbben
//Készíts egy függvényt, amely megszámolja, hányszor fordul elő egy megadott szám egy tömbben.
//Példa: [1, 2, 3, 2, 4, 2], keresett: 2 → 3 alkalommal


const tomb2:number[]=[1, 2, 3, 2, 4, 2,];


function hanyszSzam(tomb2:number[],keresett:number):number{
  return tomb2.filter((szam)=>szam===keresett).length;
  
  

}
console.log(hanyszSzam(tomb2,2));//A tömb2-ből a keresett szám itt pl.:2

//4. Szám tartalmaz-e adott számjegyet?
//Készíts egy függvényt, ami eldönti, hogy egy szám tartalmaz-e egy adott számjegyet!
// Pl.: 12345, keresett számjegy: 3 → true
//      7890, keresett számjegy: 4 → false

function tartalmazSzamJ(n:number,keresettszamjegy:number):boolean{
  
  const atalakit:number[]=n.toString().split('').map(Number)
  return atalakit.includes(keresettszamjegy);

 

}
console.log(tartalmazSzamJ(12345,3));

//5. Növekvő számjegyek?
//Írj egy függvényt, amely eldönti, hogy egy szám számjegyei növekvő sorrendben vannak-e!

// Pl.: 123 → true
//      321 → false
//      135 → true

function novVSem(n:number):boolean{
  const szamjegyek= n.toString().split('').map(Number);
  for (let i = 0; i < szamjegyek.length - 1; i++) {
    if (szamjegyek[i] >= szamjegyek[i + 1]) {
      return false;
    }
  }
  return true;
  

}
console.log(novVSem(321));

//6. Szám első és utolsó számjegyének összege
//Készíts egy függvényt, amely visszaadja egy szám első és utolsó számjegyének az összegét!
// Pl.: 4839 → 4 + 9 = 13

function elsoUtszjOsszeg(a:number):number{

  const szamoktomb=[a].toString().split('').map(Number);

  const elso=szamoktomb[0];// első számjegy mindig az első elem
  const utolso=szamoktomb[szamoktomb.length-1];// utolsó a tömb végéről

  return elso+ utolso;


}
console.log(elsoUtszjOsszeg(4839)); // ➜ 13


//7. Tömb – Szomszédos különbségek összege
//Készíts egy függvényt, amely egy tömb minden szomszédos elemének különbségét kiszámítja, és ezek abszolút értékeit összeadja!
// Pl.: [5, 8, 3] → |5-8| + |8-3| = 3 + 5 = 8

const teszetesetek1:number[]=[5, 8, 3];

function szomszedosKulOsszE(teszetesetek1:number[]):number{
  let osszeg=0;
  for (let i = 0; i < teszetesetek1.length - 1; i++) {
    const kulonbseg = Math.abs(teszetesetek1[i] - teszetesetek1[i + 1]);
    osszeg += kulonbseg;
  }

  return osszeg;
}
console.log(szomszedosKulOsszE(teszetesetek1)); // ➜ 8

/*1.Menjünk végig a tömb indexeken keresztül for ciklussal.

  2.Minden indexnél nézzük meg a következő elemet.

  3.Számoljuk ki Math.abs(t[i] - t[i+1]).

  4.Ezt adjuk hozzá az összeghez. 
*/
  



