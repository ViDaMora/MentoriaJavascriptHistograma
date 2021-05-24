class Histogram{
    constructor(hilera) {
        this.contador = {};
        this.longitudHilera = hilera.length
    }

    add (hilera){
        let hileraModificada=hilera.toUpperCase().replace(/ /g, "").replace(/\n/g, "")
        this.longitudHilera=hileraModificada.length
        for (var i = 0; i <hileraModificada.length; i++){
            if(hileraModificada[i] in this.contador){
                this.contador[hileraModificada[i]]++
            }else{
                this.contador[hileraModificada[i]]=1
            }
            
    }
    }

    toString(){
        let sortTheArray=[];
        for (let index = 0; index < Object.keys(this.contador).length; index++) {
            const porcentaje = (this.contador[Object.keys(this.contador)[index]]*100)/this.longitudHilera
            let letra = Object.keys(this.contador)[index]
            sortTheArray.push({porcentaje,letra})
            //console.log(Object.keys(sol.contador)[index] + ":  " + porcentaje.toFixed(2) +" %")
        }
        sortTheArray.sort(function (a, b) {
            if (a.porcentaje < b.porcentaje) {
              return 1;
            }
            if (a.porcentaje > b.porcentaje) {
              return -1;
            }
            // a must be equal to b
            return 0;
          });

        sortTheArray.map(a=>{console.log(a.letra+": "+a.porcentaje.toFixed(2)+" %")})

    }


}


async function histogramFromStdin(){
    process.stdin.setEncoding('utf8');
    let histogram
    for await (let chunk of process.stdin){ 
        histogram= new Histogram(chunk);
        histogram.add(chunk);
    }
    return histogram;
}



histogramFromStdin().then(histogram=>{console.log(histogram.toString());})