//Egy tömbben [3, 5, 10, 15, 20, 22] számok vannak.
//1.Írj egy függvényt, ami visszaadja a 10-nél nagyobb páros számokat



const szamok:number[]=[3,5,10,15,20,22];

function tiznNaParos(szamok:number[]):number[]{
    const parossz= szamok.filter(szam=>szam % 2 ===0);
    const nagyobb= parossz.filter(szam=>szam >10);
    return nagyobb;
    // vagy egy lépésben: return szamok.filter(szam => szam > 10 && szam % 2 === 0);

}
console.log("10-nél nagyobb páros számok:",tiznNaParos(szamok));

//2.Írj egy másik függvényt, ami megszámolja, hány szám osztható 5-tel

function oszthatoOtteldb(szamok:number[]):{oszthato:number}{
     
    let oszthato= 0;
    for(let szam of szamok){
        if(szam % 5 ===0){
            oszthato++;

        }
    }
    return{
        oszthato,
    }

}
console.log("Ennyi db szám osztható öttel:",oszthatoOtteldb(szamok));


