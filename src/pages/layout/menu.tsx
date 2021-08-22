import React, { FC, useState, useEffect } from 'react';
import { Menu } from 'antd';
import { useNavigate, useLocation } from 'react-router-dom';
import {MenuList} from "@/interface/layout/menu.interface";
import {useAppDispatch, useAppState} from "@/stores";
import { setUserItem } from '@/stores/user.store';
import { addTag } from '@/stores/tags-view.store';

const { SubMenu, Item } = Menu;

interface MenuProps {
    menuList: MenuList;
}

const MenuComponent: FC<MenuProps> = ({ menuList }) => {
    const [openKeys, setOpenkeys] = useState<string[]>([]);
    const [selectedKeys, setSelectedKeys] = useState<string[]>([]);
    const { collapsed, device, locale } = useAppState(state => state.user);
    const dispatch = useAppDispatch();
    const navigate = useNavigate();
    const { pathname } = useLocation();

    const getTitle = (menu: MenuList[0]) => {
        return (
            <span style={{ display: 'flex', alignItems: 'center' }}>
        {/*<CustomIcon type={menu.icon!} />*/}
        <span>{menu.label[locale]}</span>
      </span>
        );
    };

    const onMenuClick = (menu: MenuList[0]) => {
        if (menu.path === pathname) return;
        const { key, label, path } = menu;
        setSelectedKeys([key]);
        if (device !== 'DESKTOP') {
            dispatch(setUserItem({ collapsed: true }));
        }
        dispatch(
            addTag({
                id: key,
                label,
                path,
                closable: true
            })
        );
        navigate(path);
    };

    useEffect(() => {
        setSelectedKeys([pathname]);
        setOpenkeys(collapsed ? [] : ['/' + pathname.split('/')[1]]);
    }, [collapsed, pathname]);

    const onOpenChange = (keys: string[]) => {
        const key = keys.pop();

        setOpenkeys(key ? [key] : []);
    };

    return (
        <Menu
            mode="inline"
            theme="dark"
            selectedKeys={selectedKeys}
            openKeys={openKeys}
            onOpenChange={onOpenChange as any}
            className="layout-page-sider-menu"
        >
            {menuList?.map(menu =>
                menu.children ? (
                    <SubMenu key={menu.path} title={getTitle(menu)}>
                        {menu.children.map(child => (
                            <Item key={child.path} onClick={() => onMenuClick(child)}>
                                {child.label[locale]}
                            </Item>
                        ))}
                    </SubMenu>
                ) : (
                    <Item key={menu.path} onClick={() => onMenuClick(menu)}>
                        {getTitle(menu)}
                    </Item>
                )
            )}
        </Menu>
    );
};

export default MenuComponent;
