import {Button, Result} from "antd";
import React from "react";
import {useNavigate} from "react-router-dom";
import {useLocation} from "react-router";

/**
 * 未授权页面
 * @constructor
 */
function UnauthorizedPage() {
    const navigate = useNavigate()
    const location = useLocation();

    return (<Result
        status="403"
        title="403"
        subTitle={'subtitle'}
        extra={
            <Button
                type="primary"
                onClick={() => navigate(`/login${'?from=' + encodeURIComponent(location.pathname)}`, {replace: true})}
            >
                {/*{formatMessage({ id: 'gloabal.tips.goToLogin' })}*/}
                去登录
            </Button>
        }
    />)
}

export default UnauthorizedPage
