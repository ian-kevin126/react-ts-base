import React from "react";
import {Button, Result} from "antd";
import {useNavigate} from "react-router-dom";

/**
 * 未匹配到的页面
 * @constructor
 */
function NotFound() {
    const navigate = useNavigate()

    return <Result
        status="404"
        title="404"
        subTitle={'subtitle'}
        extra={
            <Button
                type="primary"
                onClick={() => navigate(`/`, {replace: true})}
            >
                {/*{formatMessage({ id: 'gloabal.tips.goToLogin' })}*/}
                去首页
            </Button>
        }
    />
}

export default NotFound
