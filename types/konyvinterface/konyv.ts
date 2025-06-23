interface Konyv{
    cim:string;
    ar:number;
    kategoria:string;
}

const konyv1:Konyv={
    cim:"Sok hűhó semmiért",
    ar:4200,
    kategoria:"Szinmű"
};
console.log(konyv1);

const konyv2:Konyv={
    cim:"Kincskereső kisködmön",
    ar:2500,
    kategoria:"Regény"
};
console.log(konyv2);

const konyv3:Konyv={
    cim:"A tizennégy karátos autó",
    ar:3100,
    kategoria:"Regény"
};
console.log(konyv3);

const konyvek:Konyv[]=[konyv1,konyv2,konyv3];

function regenyOsszegkonyvek(konyvek:Konyv[]):number{
    const regeny = konyvek.filter(kategoria=>kategoria.kategoria.toLowerCase()==="regény");
    const aroszz=regeny.reduce((acc,kategoria)=>acc+ kategoria.ar,0);
    return aroszz;

}
console.log("Regények összára:",regenyOsszegkonyvek(konyvek));



