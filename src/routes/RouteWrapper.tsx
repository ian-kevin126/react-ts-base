import React, { FC } from 'react';
import { Route } from 'react-router-dom';
import { RouteProps } from 'react-router';
import { useIntl } from 'react-intl';
import PrivateRoute from "@/routes/AuthorizedRoute";

export interface RouteWrapperProps extends RouteProps {
    /** document title locale id */
    titleId: string;
    /** authorization？ */
    auth?: boolean;
}

const RouteWrapper: FC<RouteWrapperProps> = ({ titleId, auth, ...props }) => {
    return auth ? <PrivateRoute {...props} /> : <Route {...props}/>;
};

export default RouteWrapper;
