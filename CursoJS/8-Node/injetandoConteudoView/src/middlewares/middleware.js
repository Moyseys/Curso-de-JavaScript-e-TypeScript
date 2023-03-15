exports.middlewareGlobal = (req, res, next) =>{
    res.locals.umaVariavelLocal = 'sla'
    next()
}

exports.outro = (req, res, next) =>{
    console.log('outro');

    next()
}