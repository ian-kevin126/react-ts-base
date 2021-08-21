import React, { FC } from 'react';
import { Route, useNavigate } from 'react-router-dom';
import { Result, Button } from 'antd';
import { RouteProps, useLocation } from 'react-router';
import {useAppState} from "@/stores";

const AuthorizedRoute: FC<RouteProps> = props => {
    const { logged } = useAppState(state => state.user);
    const navigate = useNavigate();
    // const { formatMessage } = useLocale();
    const location = useLocation();

    console.log('logged',logged)

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
                    去登录
                </Button>
            }
        />
    );
};

export default AuthorizedRoute;
