import React, {FC, Suspense, useCallback, useEffect, useState} from 'react';
import {Breadcrumb, Layout, Menu} from 'antd';
import {Outlet} from "react-router-dom";
import SuspendFallbackLoading from "@/pages/layout/SuspendFallbackLoading";
import './index.less';
import HeaderComponent from "@/pages/layout/header";
import {MenuChild, MenuList} from "@/interface/layout/menu.interface";
import {useAppDispatch} from "@/stores";
import { setUserItem } from '@/stores/user.store';
import {getMenuList} from "@/api/menu.api";
import MenuComponent from "@/pages/layout/menu";
import TagsView from "@/pages/layout/tagView";

const {Content, Sider, Footer} = Layout;

/**
 * 主页布局组件
 * @constructor
 */
const LayoutPage: FC = () => {
    const [menuList, setMenuList] = useState<MenuList>([]);
    const dispatch = useAppDispatch();

    const initMenuListAll = (menu: MenuList) => {
        const MenuListAll: MenuChild[] = [];
        menu.forEach(m => {
            if (!m?.children?.length) {
                MenuListAll.push(m);
            } else {
                m?.children.forEach(mu => {
                    MenuListAll.push(mu);
                });
            }
        });
        return MenuListAll;
    };

    const fetchMenuList = useCallback(async () => {
        const { status, result } = await getMenuList();
        if (status) {
            setMenuList(result);
            dispatch(
                setUserItem({
                    menuList: initMenuListAll(result)
                })
            );
        }
    }, [dispatch]);

    useEffect(() => {
        fetchMenuList();
    }, [fetchMenuList]);

    console.log('menuList', menuList);
    return (<Layout className="layout-page">
        <HeaderComponent />
        <Layout>
            <Sider trigger={null} breakpoint="md">
                <MenuComponent menuList={menuList} />
            </Sider>
            <Layout>
                <Content className="layout-page-content">
                    <TagsView/>
                    {/*<Breadcrumb style={{margin: '16px 0'}}>*/}
                    {/*    <Breadcrumb.Item>Home</Breadcrumb.Item>*/}
                    {/*    <Breadcrumb.Item>List</Breadcrumb.Item>*/}
                    {/*    <Breadcrumb.Item>App</Breadcrumb.Item>*/}
                    {/*</Breadcrumb>*/}
                    <Suspense fallback={<SuspendFallbackLoading />}>
                        <Outlet/>
                    </Suspense>
                </Content>
                <Footer style={{textAlign: 'center'}}>Ant Design ©2018 Created by Ant UED</Footer>
            </Layout>
        </Layout>
    </Layout>);
};

export default LayoutPage;
