function soma(x,y){
    if(typeof x !== 'number' || typeof y !== 'number'){
        throw TypeError('x e y podem não ser numeros')
        //throw new Error('x e y podem não ser numeros')
    }
    return x + y
}

try{
    console.log(soma('123',2))
}catch(e){
    console.log(e,'/ uma resposta mais amigavel')
}finally{
    console.log('sempre é executado')
}