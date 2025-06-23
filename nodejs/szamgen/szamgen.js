function randomSzamokParosak(min, max, darab) {
    const szamok = [];
    for (let i = 0; i < darab; i++) {
        const szam = Math.floor(Math.random() * (max - min + 1)) + min;
        szamok.push(szam);
    }
    return szamok.filter(szam => szam % 2 === 0);
}
// ide jön az export:
module.exports = randomSzamokParosak;
console.log("10 random páros szám 10 és 20 között:", randomSzamokParosak(10, 20, 10));

