import React, { useContext } from 'react';
import {Route, Switch, Redirect} from 'react-router-dom';
import { Context } from '../index';
import { publicRoutes } from '../routes';
import { SURVEY_PAGE } from '../utils/consts';

const AppRouter = () => {
    const {user} = useContext(Context);
    console.log(user)
    return (
        <Switch>
            {publicRoutes.map(({path, Component}) => 
                <Route key={path} path={path} component={Component} exact/>
            )}
            <Redirect to={SURVEY_PAGE}/> 
        </Switch>
    )
}

export default AppRouter
