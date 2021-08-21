import React, { FC } from 'react';
import { Route, useNavigate } from 'react-router-dom';
import { Result, Button } from 'antd';
import { RouteProps, useLocation } from 'react-router';

const PrivateRoute: FC<RouteProps> = props => {
    const logged = true;
    const navigate = useNavigate();
    const location = useLocation();

    return logged ? (
        <Route {...props} />
    ) : (
        <Result
            status="403"
            title="403"
            subTitle={'subtitle'}
            extra={
                <Button
                    type="primary"
                    onClick={() => navigate(`/login${'?from=' + encodeURIComponent(location.pathname)}`, { replace: true })}
                >
                    {/*{formatMessage({ id: 'gloabal.tips.goToLogin' })}*/}
                    goToLogin
                </Button>
            }
        />
    );
};

export default PrivateRoute;
