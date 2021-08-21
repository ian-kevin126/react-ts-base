import React, {FC, Suspense} from 'react'
import {Breadcrumb, Layout, Menu} from 'antd'
import {Outlet} from "react-router-dom";
import SuspendFallbackLoading from "@/pages/layout/SuspendFallbackLoading";
import SubMenu from 'antd/lib/menu/SubMenu';
import {LaptopOutlined, NotificationOutlined, UserOutlined} from "@ant-design/icons";
import './index.less'

const {Header, Content, Sider, Footer} = Layout;

/**
 * 主页布局组件
 * @constructor
 */
const LayoutPage: FC = () => {
    return (<Layout className="layout-page">
        <Header className="header">
            <div className="logo"/>
            <Menu theme="dark" mode="horizontal" defaultSelectedKeys={['2']}>
                <Menu.Item key="1">nav 1</Menu.Item>
                <Menu.Item key="2">nav 2</Menu.Item>
                <Menu.Item key="3">nav 3</Menu.Item>
            </Menu>
        </Header>
        <Layout>
            <Sider className="site-layout-background" width={200}>
                <Menu
                    mode="inline"
                    theme={'light'}
                    defaultSelectedKeys={['1']}
                    defaultOpenKeys={['sub1']}
                    style={{height: '100%'}}
                >
                    <SubMenu key="sub1" icon={<UserOutlined/>} title="subnav 1">
                        <Menu.Item key="1">option1</Menu.Item>
                        <Menu.Item key="2">option2</Menu.Item>
                        <Menu.Item key="3">option3</Menu.Item>
                        <Menu.Item key="4">option4</Menu.Item>
                    </SubMenu>
                    <SubMenu key="sub2" icon={<LaptopOutlined/>} title="subnav 2">
                        <Menu.Item key="5">option5</Menu.Item>
                        <Menu.Item key="6">option6</Menu.Item>
                        <Menu.Item key="7">option7</Menu.Item>
                        <Menu.Item key="8">option8</Menu.Item>
                    </SubMenu>
                    <SubMenu key="sub3" icon={<NotificationOutlined/>} title="subnav 3">
                        <Menu.Item key="9">option9</Menu.Item>
                        <Menu.Item key="10">option10</Menu.Item>
                        <Menu.Item key="11">option11</Menu.Item>
                        <Menu.Item key="12">option12</Menu.Item>
                    </SubMenu>
                </Menu>
            </Sider>
            <Layout>
                <Content className="layout-page-content">
                    {/*<TagsView/>*/}
                    <Breadcrumb style={{margin: '16px 0'}}>
                        <Breadcrumb.Item>Home</Breadcrumb.Item>
                        <Breadcrumb.Item>List</Breadcrumb.Item>
                        <Breadcrumb.Item>App</Breadcrumb.Item>
                    </Breadcrumb>
                    <Suspense
                        fallback={
                            <SuspendFallbackLoading
                                message="Alert message title"
                                description="Further details about the context of this alert."
                            />
                        }
                    >
                        <Outlet/>
                    </Suspense>
                </Content>
                <Footer style={{textAlign: 'center'}}>Ant Design ©2018 Created by Ant UED</Footer>
            </Layout>
        </Layout>
    </Layout>)
}

export default LayoutPage
