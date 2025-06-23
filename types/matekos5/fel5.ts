//Hányszor szerepel egy szám tömbben?
//Pl.: [1,2,2,3,2], keresett: 2 → 3

const tomb1:number[]=[1,2,2,3,2];

function hanyszorSzam(tomb1:number[],keresett:number):number{
    
    const hanyszor=tomb1.filter(szam=>szam===keresett).length;
    return hanyszor;

}
console.log("A keresett szám:",hanyszorSzam(tomb1,2)," -szor szerepel benne"); // ➜ 3
console.log(hanyszorSzam(tomb1,3));// ➜ 1
console.log(hanyszorSzam(tomb1,5)); // ➜ 0


//Palindrom szám-e?
//Pl.: 121 → true, 123 → false

function palindromE(n:number):boolean{
    const eredeti=n.toString();
    const forditott=eredeti.split('').reverse().join('');
    return eredeti===forditott;
    

}
console.log("Az állítás:",palindromE(121));//true
console.log("Az állítás:",palindromE(123));//false




//Két szám közti számjegyek összege (kizáró értékekkel)
//Pl.: 3 és 7 → 4+5+6 = 15

function kozottiOszeg(a:number,b:number):number{

    let legn= Math.max(a,b);
    let legk=Math.min(a,b);
    let osszeguk=0;

    for(let i=legk + 1; i < legn; i++){
        
        osszeguk+=i;

          
                
    }
    return osszeguk;
            

}
console.log("A két szám közti számjegyek összege:",kozottiOszeg(3, 7)); // ➜ 15 (4 + 5 + 6)
console.log("A két szám közti számjegyek összege:",kozottiOszeg(5, 9)); // ➜ 21 (6 + 7 + 8)

