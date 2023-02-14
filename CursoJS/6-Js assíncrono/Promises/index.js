function rand(min,max){
    min *= 1000;
    max *= 1000;
    return Math.floor(Math.random() * (max - min) + min);
}
function esperaAi(msg,tempo){
    return new Promise((resolve,reject) => {
        if(typeof msg !== 'string' ) reject(new Error('ERROR'));
        setTimeout(()=>{
            resolve(msg)
        },tempo)
    });
}
esperaAi('conecta no bd',rand(1, 3))
.then(msg => {
    console.log(msg);
    return esperaAi('busca dados no bd',rand(1, 3));
})
.then(msg =>{
    console.log(msg);
    return esperaAi('Trata dados do bd', rand(1,3));
})
.then(msg => {
    console.log(msg);
}).then(()=>{
    return console.log('FIM');
})
.catch((e)=>{
    console.log(e);
});