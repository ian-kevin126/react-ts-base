import React from 'react';
import {Menu, Layout} from "antd";
import AntdLogo from '@/assets/logo/antd.svg';
import './index.less';

const { Header } = Layout;

function HeaderComponent() {

    return (<Header className="header">
        <div className="logo"><img src={AntdLogo} alt="" /></div>
    </Header>);
}

export default HeaderComponent;