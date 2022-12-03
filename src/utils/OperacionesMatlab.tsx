
export function abs(x: number): number{
    if(x<0){return -x;}
    return x
}


export function calcBiseccion(a:number,b:number,func:string):number{
    let c = 0;
    let continuar = 1;
    let tolerancia = 0.000001;
    let f = JSON.parse(func);
    console.log(typeof f);
    if(f(a)*f(b) < 0){
        while(continuar){
            c = (a+b)/2;
            if(abs(f(c))<=tolerancia){
                return c;
            }else{
                if(f(a)*f(c)<0){b=c;}
                if(f(c)*f(b)<0){a=c;}
            }
        }
    }

    return c;
}