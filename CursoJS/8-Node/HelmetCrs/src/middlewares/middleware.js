exports.middlewareGlobal = (req, res, next) =>{
    res.locals.umaVariavelLocal = 'sla'
    next()
}

exports.outro = (req, res, next) =>{
    console.log('outro');
    next()
}

exports.checjkError = (err, req, res, next) => {
    if(err && err.code === 'EBADCSRFTOKEN'){
        return res.render('404')
    }
}

exports.crsfMiddleware = (req, res, next) => {
    res.locals.csrfToken = req.csrfToken()
    next()
}