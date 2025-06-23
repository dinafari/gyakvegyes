//1.Interfészes tömbszűrés: csak a 18 év feletti aktív felhasználók

interface Felhasznalo{
    nev:string;
    kor:number;
    munkakor:string;
    aktiv:boolean;
}

const felhasznalok:Felhasznalo[]=[
    {nev:"John Long",kor:31,munkakor:"Taxi sofőr" ,aktiv:true},
    {nev:"Mary Louise",kor:20,munkakor:"Bolti eladó",aktiv:false},
    {nev:"Little Richard",kor:17,munkakor:"tanuló",aktiv:true},
];
console.log(felhasznalok);

function aktivTizennyolcfeleltt(felhasznalok:Felhasznalo[]):Felhasznalo[]{
    const eredm=felhasznalok.filter(felhasznalo=>felhasznalo.kor >18 && felhasznalo.aktiv===true);
    return eredm;
}
console.log(aktivTizennyolcfeleltt(felhasznalok));


//2.Egy szám bináris formája és a benne lévő 1-esek száma

function binárissaAlakit(n:number):{binaris:string,egyesekszama:number}{  

   
    const binaris =n.toString(2);
    const egyesekszama=binaris.split('').filter(szamol=>szamol==='1').length;// benne lévő egyesek számának megszámlálása 
    return {binaris,egyesekszama};


    
}
console.log(binárissaAlakit((15)));
// { binaris: "1111", egyesekSzama: 4 }

//3.Szám faktoriálisainak listája tömbben (pl. [3,4] → [6, 24]) 


function faktorialisLista(tomb: number[]): number[] {
    return tomb.map(n => {
        let eredmeny = 1;
        for (let i = 2; i <= n; i++) {
            eredmeny *= i;
        }
        return eredmeny;
    });
}
console.log(faktorialisLista([3, 4])); // [6, 24]


//Memoizaltan:
/*function faktorialisMemo() {
    const memo: { [key: number]: number } = {};
    return function szamol(n: number): number {
        if (n <= 1) return 1;
        if (memo[n]) return memo[n];
        memo[n] = n * szamol(n - 1);
        return memo[n];
    };
}

const faktorialis = faktorialisMemo();
console.log([3, 4].map(faktorialis)); // [6, 24]*/




//4.Az első n prímszám visszaadása egy tömbben .Megnézzük a prímeket 2-től kezdődően az első 5 prímet :

function elsoNPrim(n: number): number[] {
    const primek: number[] = [];
    let szam = 2;

    function isPrim(szam: number): boolean {
        for (let i = 2; i <= Math.sqrt(szam); i++) {
            if (szam % i === 0) return false;
        }
        return true;
    }

    while (primek.length < n) {
        if (isPrim(szam)) {
            primek.push(szam);
        }
        szam++;
    }

    return primek;
}

console.log(elsoNPrim(5)); // [2, 3, 5, 7, 11]



