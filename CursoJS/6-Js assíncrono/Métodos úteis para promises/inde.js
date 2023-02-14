function rand(min, max){
    min *= 1000;
    max *= 1000;
    return Math.floor(Math.random() * (max - min) + min);
}
function esperaAi(msg, tempo){
    return new Promise((resolve, reject)=>{
        if(typeof msg !== 'string'){
            reject('erro');
        } 
        setTimeout(()=>{
            resolve(msg)
        },tempo)
    })
}

function criaPagina(){
    const cache = true;
    if(cache){
        return Promise.reject('pagina em cache');
    }
    return esperaAi('criansdo pagina',3000);
}

criaPagina()
.then((msg)=>{
    console.log(msg);
})
.catch((e)=>{
    console.log('ERRO',e);
})

// const promises = [
//     'sls',
//     esperaAi('01',3000),
//     esperaAi('02',2000),
//     'sla'
// ]

// Promise.all(promises)
// .then((vl)=>{
//     console.log(vl);
// })
// .catch((e)=>{
//     console.log(e);
// })
// Promise.race(promises)
// .then((vl)=>{
//     console.log(vl);
// })
// .catch((e)=>{
//     console.log(e);
// })








// esperaAi('01',3000)
// .then((msg)=>{
//     console.log(msg);
//     return esperaAi('02',2000);
// })
// .then((msg)=>{
//     console.log(msg);
//     return esperaAi('03',1000);
// })
// .then((msg)=>{
//     console.log(msg);
// })
// .catch((e)=>{
//     console.log(e);
// })

