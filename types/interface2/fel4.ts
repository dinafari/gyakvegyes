//3.Írj egy Diak interfészt, és számold ki több tanuló átlageredményét

interface Diak{
    tanulo:string;
    eredmeny:number;
    tantargy:string;
    
}
const tanulo1:Diak={
    tanulo:"Juli",
    eredmeny:5,
    tantargy:"Matek",
};
console.log(tanulo1);

const tanulo2:Diak={
    tanulo:"Géza",
    eredmeny:4,
    tantargy:"Fizika",

}
console.log(tanulo2);

const tanulo3:Diak={
    tanulo:"Ernő",
    eredmeny:3,
    tantargy:"Kémia",

}
console.log(tanulo3);

const diakok:Diak[]=[tanulo1,tanulo2,tanulo2];
console.log(tanulo1,tanulo2,tanulo3);


function osztalyAtlag(diakok: Diak[]): number {
  const osszeg = diakok.reduce((sum, diak) => sum + diak.eredmeny, 0);//acc is lehetne :)
  return osszeg / diakok.length;
}

console.log("Osztályátlag:", osztalyAtlag(diakok).toFixed(2));