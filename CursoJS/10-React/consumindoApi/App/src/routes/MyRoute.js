import React from "react";
import { Route, Redirect } from 'react-router-dom'
import PropTypes from 'prop-types'

export default function MyRoute({component: Component, isClosed,...rest}){
    console.log(Component, {...rest});
    const isLogedIn = false
    
    if(isClosed && !isLogedIn){
        return (
            <Redirect
                to={{ pathname: '/login', state: { prevPath: rest.location.pathname}}}
            />
        )
    }

    return <Route {...rest} component={Component}/>
}

MyRoute.defauktProps = {
    isClosed: false
}

MyRoute.propTypes = {
    component: PropTypes.oneOfType([PropTypes.element, PropTypes.func]).isRequired,
    isClosed: PropTypes.bool
}

