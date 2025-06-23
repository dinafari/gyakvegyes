
//1. Tömb legkisebb elemének indexe
//Keresd meg a legkisebb szám indexét egy számtömbben.

const tomb1:number[]=[1,2,10,55,20];

function legkIndex(tomb1:number[]):number{
    const legk= Math.min(...tomb1);
    return tomb1.indexOf(legk);//.indexOf()visszaadja egy szám indexét pl egy tömbből(tomb1)
    

}
console.log(legkIndex(tomb1));




//2.Prímszám ellenőrzés
//Készíts egy függvényt, amely eldönti, hogy egy szám prímszám-e vagy sem.
//Pl.: 7 → Igen, 8 → Nem

function isPrime(n: number): boolean {
    if (n < 2) return false;

    for (let i = 2; i <= Math.sqrt(n); i++) {
        if (n % i === 0) return false;
    }

    return true;
}
console.log(isPrime(8));




//3.Három szám szorzata negatív-e?
//Írj egy függvényt, amely eldönti, hogy három szám szorzata negatív szám-e.

function szamokSzorzataNegVNem(x:number,y:number,z:number):string{
    const szorz = x*y*z;
    
    if(szorz < 0 ){
        return`A szamok szorzata negatív(${szorz})`;
    }else if(szorz > 0) {
        return `A számok szorzata pozitív(${szorz}) `;
    }else{
        return `A szorzat nulla`;
    }

}
console.log(szamokSzorzataNegVNem(7,-1,2));

