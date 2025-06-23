/* 2. Interfész: Hallgato (nev, jegyek: number[])
    Számold ki a hallgató átlagát, és döntsd el, hogy „Sikeres” vagy „Sikertelen” (átlag legalább 2.5)
*/
var hallgato1 = {
    nev: "Kiss Géza",
    jegyek: [2, 4, 5],
};
console.log(hallgato1);
var hallgatok = [hallgato1];
console.log(hallgatok);
function atlagaSikervSikert(hallgatok) {
    // Összes jegy összeadása
    var mindenJegy = [].concat.apply([], hallgatok.map(function (h) { return h.jegyek; }));
    var osszege = mindenJegy.reduce(function (acc, jegy) { return acc + jegy; }, 0);
    var atl = osszege / mindenJegy.length;
    return {
        atlag: atl,
        eredmeny: atl >= 2.5 ? "Sikeres" : "Sikertelen"
    };
}
console.log(atlagaSikervSikert(hallgatok));
