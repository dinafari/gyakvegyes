//1.Páros és páratlan számok megszámlálása
//Készíts egy függvényt, amely megszámolja, hány páros és hány páratlan szám van egy tömbben.
// Bemenet: [1, 2, 3, 4, 6]
// Kimenet: { paros: 3, paratlan: 2 }

const bemenet2:number[]=[1, 2, 3, 4, 6];

function paroParatl(bemenet2:number[]):{paros:number,paratl:number}{
    const paros= bemenet2.filter((szam)=>szam %2 ===0).length;
    const paratl= bemenet2.filter((szam)=>szam %2 !==0).length; 
    return {
        paros,
        paratl

    };
    

}
console.log("Páros és páratlan számok db száma:",paroParatl(bemenet2))
//1 a.Irj egy függvényt ami ellenőrzi egy számról, hogy páros e vagy páratlan
function parPl(n:number):boolean{
    if(n % 2===0){
        return true
    }else{
        return false;
    }
   
}
console.log("A szám:",parPl(10));

// 1 b.Készíts egy függvényt, a páros és páratlan számok összegét
// Pl: const bemenet2:number[]=[1, 2, 3, 4, 6] páratlanosszeg:4  párososszeg:12

function parosszParoszz(bemenet2:number[]):{parososszeg:number, paratlosszeg:number}{

    let parososszeg:number=0;
    let paratlosszeg:number=0;

    for(let szam of bemenet2){
        if(szam %2 ===0){
            parososszeg+=szam;
        }
        if(szam %2 !==0){
            paratlosszeg+=szam;
        }
    }
    return{
        parososszeg,
        paratlosszeg

    }
        

}
console.log("Összes páros szám összege és az összes páratlan szám összege:",parosszParoszz(bemenet2));


//2. Fibonacci sorozat első 5 páros száma
//Készíts egy függvényt, amely visszaadja a Fibonacci-sorozat első 5 páros számát.
// Kimenet: [2, 8, 34, 144, 610]

function fibParos(n:number):number[]{

    let elsosz=0;
    let masodiksz=1;
    let vegeredmeny:number[]=[];

    while(vegeredmeny.length < n ){
        const kovetkezosz:number =elsosz+ masodiksz;

        if(kovetkezosz % 2===0){
            vegeredmeny.push(kovetkezosz);
        }
        elsosz=masodiksz;
        masodiksz=kovetkezosz;


    }
    return vegeredmeny;

}
console.log("Fibonacci-sorozat első 5 páros száma:",fibParos(5));//Itt szabom meg hány db páros számot kérek vissza a sorozatból


//3.Számok átlag alatti kiszűrése
//Készíts egy függvényt, amely visszaadja a tömb azon elemeit, amelyek kisebbek az átlaguknál.

// Bemenet: [5, 10, 15, 20]
// Átlag: 12.5 → Kimenet: [5, 10]

const bemenet3:number[]=[5, 10, 15, 20];

function atlAlatt(bemenet3:number[]):number[]{
    const osszead= bemenet3.reduce((acc:number,curr:number)=>acc+curr);
    const atl = osszead/bemenet3.length;
    const kisebbeknala= bemenet3.filter((szam)=>szam < atl);
    return kisebbeknala;

}
console.log("Számok amik kisebbek az össz tömb átlagánál:",atlAlatt(bemenet3));



