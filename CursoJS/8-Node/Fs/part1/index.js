const path = require('path');
const fs = require('fs').promises;

async function readdir(file){
    file = file || path.resolve(__dirname);
    const files = await fs.readdir(file);
    walk(files, file)
}

async function walk(files, root){
    for(const file of files){
        const fileFullPath = path.resolve(root, file)
        const stats = await fs.stat(fileFullPath);
        
        if(stats.isDirectory()){
            readdir(fileFullPath)
            continue
        }

        console.log(fileFullPath);
    }
}


readdir('D:/moyseys/Projetos git/CursoJs/Curso-de-JavaScript-e-TypeScript/CursoJS')