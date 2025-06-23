/* 3. TypeScript – Tömb + átlag számítás
    Hozz létre egy Jegy nevű interfészt:

    tantargy: string

    jegy: number

    Adj hozzá legalább 4 jegyet, majd készíts egy függvényt, amely:

    kiszámolja az átlagot

    és visszaadja, hogy „Sikeres” ha az átlag legalább 2.5, különben „Sikertelen”


*/
var jegy1 = {
    tantargy: "Matematika",
    jegy: 5
};
console.log(jegy1);
var jegy2 = {
    tantargy: "Kémia",
    jegy: 4,
};
console.log(jegy2);
var jegy3 = {
    tantargy: "Irodalom",
    jegy: 3,
};
console.log(jegy3);
var jegy4 = {
    tantargy: "Fizika",
    jegy: 2,
};
console.log(jegy4);
var jegyek = [jegy1, jegy2, jegy3, jegy4];
function atlagSikerVsSikertelen(jegyek) {
    var osszeguk = jegyek.reduce(function (acc, jegy) { return acc + jegy.jegy; }, 0);
    var atl = osszeguk / jegyek.length;
    return {
        atlag: atl,
        eredmeny: atl >= 2.5 ? "Sikeres" : "sikertelen"
    };
}
console.log(atlagSikerVsSikertelen(jegyek));
