/*    *1. TypeScript – Objektumok szűrése
    Feladat:
    Adott egy tanfolyamokat tartalmazó tömb:


    const tanfolyamok = [
        { nev: 'HTML', ar: 4000 },
        { nev: 'Angular', ar: 12000 },
        { nev: 'Node.js', ar: 10000 },
        { nev: 'Bootstrap', ar: 7000 }
    ];
    Készíts egy függvényt, amely visszaadja azokat a tanfolyamokat, ahol az ár 8000 Ft vagy annál több!*/

 const tanfolyamok = [
        { nev: 'HTML', ar: 4000 },
        { nev: 'Angular', ar: 12000 },
        { nev: 'Node.js', ar: 10000 },
        { nev: 'Bootstrap', ar: 7000 }
    ];

    

    function nyolcEzervTobb(tanfolyamok:{nev:string, ar:number}[]):{nev:string,ar:number}[]{
       const annyi= tanfolyamok.filter((tanfolyamok)=>tanfolyamok.ar >=8000);
       return annyi;

    }
    console.log("A tanfolyamok, ahol az ár 8000 Ft vagy annál több!:",nyolcEzervTobb(tanfolyamok));

    //2. TypeScript – Objektumlista szűrése
    //Van egy tanulók listája, a következő struktúrával:
    //Írj egy függvényt, ami visszaadja csak a jeles tanulókat (átlag ≥ 4.5)!

    const tanulok=[
        
        { nev: "Anna", atlag: 4.7 },
        { nev: "Béla", atlag: 3.1 },
        { nev: "Cili", atlag: 5.0 },
        { nev: "Dani", atlag: 2.9 }

        
    ];
    console.log(tanulok);

    function jelesTanulok(tanulok:{nev:string,atlag:number}[]):{nev:string,atlag:number}[]{

        const jeles= tanulok.filter((tanulok)=>tanulok.atlag >= 4.5);
        return jeles;

    }
    console.log(jelesTanulok(tanulok));

    //3.Tanfolyam szűrés interfésszel
    /*Hozz létre egy Tanfolyam interfészt és add vissza azokat a tanfolyamokat, amelyek nevében szerepel az "JS" és az áruk 5000 fölött van.


        const tanfolyamok2 = [
            { nev: 'JavaScript', ar: 8000 },
            { nev: 'TypeScript', ar: 6000 },
            { nev: 'Python', ar: 4000 }
        ];*/

        const tanfolyamok2 = [
            { nev: 'JavaScript', ar: 8000 },
            { nev: 'TypeScript', ar: 6000 },
            { nev: 'Python', ar: 4000 }
        ];


        function tartlmazJsarNagyobbOtezer(tanfolyamok2:{nev:string,ar:number}[]):{nev:string,ar:number}[]{
            return tanfolyamok2.filter(t => t.ar > 5000 && /j.*s/i.test(t.nev));
            //vagy:t.nev.toLowerCase().includes('j') && t.nev.toLowerCase().includes('s')

           

        }
        console.log(tartlmazJsarNagyobbOtezer(tanfolyamok2));

        //4. Négyzetek a páros számokból
        //Egy számokat tartalmazó tömbből csak a páros számok négyzeteit add vissza új tömbben.
        //[2, 3, 4] → [4, 16]

        const szamt1:number[]=[2, 3, 4]

        function parosNegyzet(szamt1:number[]):number[]{
            const paros=szamt1.filter((szam)=>szam %2 ==0);
            const negyz=paros.map(szam=>szam*szam);
            return negyz;
        

        }
        console.log(parosNegyzet(szamt1));



         //5.Szavak hossza szerinti szűrés
            //Adott egy szöveg tömb. Add vissza azokat, amelyek pontosan 5 karakteresek!
         // ['alma', 'szilva', 'körte', 'barack'] → ['körte']

         const szavakt1:string[]=['alma', 'szilva', 'körte', 'barack'];

         function otkaraKterhossz(szavakt1:string[]):string[]{
                const ot=szavakt1.filter((szo)=>szo.length===5);
                return ot;

            }
            console.log(otkaraKterhossz(szavakt1));

        //6.Elemek előfordulási számának meghatározása
            //Készíts függvényt, ami visszaadja, hányszor szerepel minden szám egy tömbben.
         //[2, 3, 2, 4, 3] → { 2: 2, 3: 2, 4: 1 }

        


            function hanyszorSzerepel(szamok: number[]): { [key: number]: number } {
                const eredmeny: { [key: number]: number } = {};

                szamok.forEach(szam => {
                    eredmeny[szam] = (eredmeny[szam] || 0) + 1;
                });

                return eredmeny;
            }

            console.log(hanyszorSzerepel([2, 3, 2, 4, 3]));
            // Kimenet: { 2: 2, 3: 2, 4: 1 }







    
