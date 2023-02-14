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

async function executa(){
    try{
        const um = await esperaAi('01',2000);
        console.log(um);
        const dois = await esperaAi(2,2000);
        console.log(dois);
        const tres = await esperaAi('03',2000);
        console.log(tres);
    }catch(e){
        console.log(e);
    }
}

executa()

