exports.middlewareGlobal = (req, res, next) =>{
    console.log('Global');

    next()
}

exports.outro = (req, res, next) =>{
    console.log('outro');

    next()
}