//1.Számold meg, hány szám osztható 3-mal egy number[] tömbben

const number:number[]=[9,3,5,21,77,2];

function oszthHarommal(number:number[]):number{
    const oszth =number.filter(szam=>szam % 3===0).length;
    return oszth;
}
console.log(oszthHarommal(number) +"db");

//2.Készíts egy függvényt, ami visszaadja a 10-nél nagyobb számokat

const tesztesetek:number[]= [1,3,6,10,12,66,83,44];

function tiznelnagyobb(tesztesetek:number[]):number[]{
    const nagyotiz= tesztesetek.filter(szam=>szam >10);
    return nagyotiz;


}
console.log(tiznelnagyobb(tesztesetek));



//4.Készíts egy függvényt, amely visszaadja a 100 alatti négyzetszámokat 

function tizalattNegyz(count:number,min:number=2,max:number=100):number[]{

    let ujszamok:number[]=[];//Sajnos ez a feladat szerintem nem lett jó 
    // és az includes-ra is panaszkodik a terminál :(

    if( min % 2 !==0){
        min ++;
    }
     while(ujszamok.length < count){
        let randomp:number = Math.floor(Math.random()*((max-min)/2 + 1))*2 + min;
        if(!ujszamok.includes(randomp)){
            ujszamok.push(randomp);
        }

    }
    return ujszamok.filter(szam=> szam %4 ===0);

    
   

  
}
console.log(tizalattNegyz(98));