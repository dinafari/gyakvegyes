//1.Tömb első és utolsó elemének összege
//Pl.: [5, 2, 9, 1] → 5 + 1 = 6
var tesztesetek = [5, 2, 9, 1];
function elsoUtOsszege(tesztesetek) {
    var utolso = tesztesetek[tesztesetek.length - 1]; // Így bármilyen hosszú tömbnél jól működik.
    var elso = tesztesetek[0];
    return elso + utolso;
}
console.log(elsoUtOsszege(tesztesetek));
//2.Tömbben szerepel-e a keresett szám (pl. 7)?
//Használj includes() vagy some() metódust!
//Pl.: [3, 5, 7], keresett: 7 → true
var tomb = [3, 5, 7];
function vanbenne(tomb, szam) {
    var van = tomb.includes(szam); // lerövidíthető erre:
    // return tomb.includes(szam); true or false lesz automatikusan és nem kell if és else
    if (van) {
        return true;
    }
    else {
        return false;
    }
}
console.log(vanbenne(tomb, 7));
//szogalmi:
// db-szerint hányszor van benne a keresett szám
function szerepelEDBszor(tomb, keresett) {
    var szerepelDb = tomb.filter(function (szam) { return szam === keresett; }).length;
    return szerepelDb;
}
console.log(szerepelEDBszor(tomb, 7));
