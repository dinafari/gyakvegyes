// 1.Hozz létre egy Dolgozat interfészt: nev: string, pontszam: number
// Adj hozzá legalább 3 dolgozatot, és számold ki az átlagpontszámot


interface Dolgozat{
    nev:string;
    pontszam:number;
}

const dolgozat1:Dolgozat={
    nev:"Pisti",
    pontszam:80,
}
console.log(dolgozat1);


const dolgozat2:Dolgozat={
    nev:"Juli",
    pontszam:100,
}
console.log(dolgozat2);



const dolgozat3:Dolgozat={
    nev:"Sándor",
    pontszam:50,
}
console.log(dolgozat3);

const dolgozatok:Dolgozat[]=[dolgozat1,dolgozat2,dolgozat3];

function atlagPontsz(dolgozatok:Dolgozat[]):number{
    const atl=dolgozatok.reduce((acc,dolgozat)=>acc + dolgozat.pontszam,0);
    return atl/dolgozatok.length;

}
console.log(atlagPontsz(dolgozatok));

// 2.Írj egy függvényt, amely visszaadja egy tömb prímszámait
// Pl: [2, 4, 5, 9, 11] → [2, 5, 11]

const szamok1:number[]=[ 2, 4, 5, 9, 11 ];

function primek(szamok1: number[]): number[] {
  return szamok1.filter(szam => {
    if (szam < 2) return false;

        for (let i = 2; i <= Math.sqrt(szam); i++) {
            if (szam % i === 0) {
                return false;
            }
        }
        return true;
    });
};
console.log(primek(szamok1)); // [2, 5, 11]



// 3.Készíts egy függvényt, amely egy tömbből azokat a számokat adja vissza,
// amelyek 3-mal ÉS 5-tel is oszthatók
// Pl: [15, 30, 22, 45, 60] → [15, 30, 45, 60]

const szamok2:number[]=[ 15, 30, 22, 45, 60];

function harommalésOtteloszth(szamok2:number[]):number[]{
    const haromot= szamok2.filter(szam=>szam % 3===0 &&szam % 5 ===0);
    return haromot;
}
console.log(harommalésOtteloszth(szamok2));





