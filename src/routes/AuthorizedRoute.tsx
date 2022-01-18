import React, {FC} from 'react';
import {Route} from 'react-router-dom';
import {RouteProps} from 'react-router';
import {useAppState} from "@/stores";
import UnauthorizedPage from "@/pages/error/UnauthorizedPage";

const AuthorizedRoute: FC<RouteProps> = props => {
    const {logged} = useAppState(state => state.user);

    console.log('logged', logged)

    return logged ? (<Route {...props} />) : (<UnauthorizedPage/>);
};

export default AuthorizedRoute;
