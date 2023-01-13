let array = []

for(let i = 0; i < 100000; i++ ){
    
    if(i < 30000){
        continue
    }
    console.log(i)
    if(i === 70000){
        console.log("item encontrado")
        break
    }
}