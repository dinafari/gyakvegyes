/* 2. Interfész: Hallgato (nev, jegyek: number[])
    Számold ki a hallgató átlagát, és döntsd el, hogy „Sikeres” vagy „Sikertelen” (átlag legalább 2.5)
*/



interface Hallgato{
    nev:string;
    jegyek:number[];
}

const hallgato1:Hallgato={
    nev:"Kiss Géza",
    jegyek:[2,4,5],
}
console.log(hallgato1);

const hallgatok:Hallgato[]=[hallgato1];
console.log(hallgatok);

function atlagaSikervSikert(hallgatok:Hallgato[]):{atlag:number,eredmeny:string}{
    // Összes jegy összeadása
    const mindenJegy: number[] = [].concat(...hallgatok.map(h => h.jegyek));

    const osszege= mindenJegy.reduce((acc,jegy)=>acc+jegy,0);

    const atl= osszege/mindenJegy.length;

    return{
        atlag:atl,
        eredmeny:atl>=2.5 ? "Sikeres" : "Sikertelen"

    };

}
console.log(atlagaSikervSikert(hallgatok));