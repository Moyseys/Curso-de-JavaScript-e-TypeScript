exports.middlewareGlobal = (req, res, next) =>{
    res.locals.error = req.flash('error')
    res.locals.sucess = req.flash('sucess')
    res.locals.user = req.session.user
    
    next()
}

exports.outro = (req, res, next) =>{
    console.log('outro');
    next()
}

exports.checjkError = (err, req, res, next) => {
    if(err){ //&& err.code === 'EBADCSRFTOKEN'
        console.log(err)
        return res.render('404')
    }
    next()
}

exports.crsfMiddleware = (req, res, next) => {
    res.locals.csrfToken = req.csrfToken()
    next()
}