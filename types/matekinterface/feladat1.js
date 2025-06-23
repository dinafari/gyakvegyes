//1.Interfészes tömbszűrés: csak a 18 év feletti aktív felhasználók
var felhasznalok = [
    { nev: "John Long", kor: 31, munkakor: "Taxi sofőr", aktiv: true },
    { nev: "Mary Louise", kor: 20, munkakor: "Bolti eladó", aktiv: false },
    { nev: "Little Richard", kor: 17, munkakor: "tanuló", aktiv: true },
];
console.log(felhasznalok);
function aktivTizennyolcfeleltt(felhasznalok) {
    var eredm = felhasznalok.filter(function (felhasznalo) { return felhasznalo.kor > 18 && felhasznalo.aktiv === true; });
    return eredm;
}
console.log(aktivTizennyolcfeleltt(felhasznalok));
//2.Egy szám bináris formája és a benne lévő 1-esek száma
function binárissaAlakit(n) {
    var binaris = n.toString(2);
    var egyesekszama = binaris.split('').filter(function (szamol) { return szamol === '1'; }).length; // benne lévő egyesek számának megszámlálása 
    return { binaris: binaris, egyesekszama: egyesekszama };
}
console.log(binárissaAlakit((15)));
// { binaris: "1111", egyesekSzama: 4 }
//3.Szám faktoriálisainak listája tömbben (pl. [3,4] → [6, 24]) 
function faktorialisLista(tomb) {
    return tomb.map(function (n) {
        var eredmeny = 1;
        for (var i = 2; i <= n; i++) {
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
function elsoNPrim(n) {
    var primek = [];
    var szam = 2;
    function isPrim(szam) {
        for (var i = 2; i <= Math.sqrt(szam); i++) {
            if (szam % i === 0)
                return false;
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
