import React, {FC, lazy} from "react";
import RouteWrapper from "@/routes/RouteWrapper";
import {PartialRouteObject, useRoutes} from "react-router-dom";
import NotFound from "@/pages/error/NotFound";
import RoutePermission from '@/pages/permission/route';
import ButtonPermission from '@/pages/permission/button';
import FormPage from '@/pages/components/form';
import TablePage from '@/pages/components/table';
import SearchPage from '@/pages/components/search';
import TabsPage from '@/pages/components/tabs';
import AsidePage from '@/pages/components/aside';
import RadioCardsPage from '@/pages/components/radio-cards';
import BusinessBasicPage from '@/pages/business/basic';
import BusinessWithSearchPage from '@/pages/business/with-search';
import BusinessWithAsidePage from '@/pages/business/with-aside';
import BusinessWithRadioCardsPage from '@/pages/business/with-radio-cards';
import BusinessWithTabsPage from '@/pages/business/with-tabs';

const LoginPage = lazy(() => import(/* webpackChunkName: "login'"*/ '@/pages/login'));
const DashBoardPage = lazy(() => import(/* webpackChunkName: "dashboard'"*/ '@/pages/dashboard'));
const LayoutPage = lazy(() => import(/* webpackChunkName: "dashboard'"*/ '@/pages/layout'));
const Documentation = lazy(() => import(/* webpackChunkName: "documentation'"*/ '@/pages/documentation'));
const Guide = lazy(() => import(/* webpackChunkName: "guide'"*/ '@/pages/guide'));
// const RoutePermission = lazy(() => import(/* webpackChunkName: "route-permission"*/ '@/pages/permission/route'));
// const ButtonPermission = lazy(() => import(/* webpackChunkName: "button-permission"*/ '@/pages/permission/button'));
// const FormPage = lazy(() => import(/* webpackChunkName: "form'"*/ '@/pages/components/form'));
// const TablePage = lazy(() => import(/* webpackChunkName: "table'"*/ '@/pages/components/table'));
// const SearchPage = lazy(() => import(/* webpackChunkName: "search'"*/ '@/pages/components/search'));
// const TabsPage = lazy(() => import(/* webpackChunkName: "tabs'"*/ '@/pages/components/tabs'));
// const AsidePage = lazy(() => import(/* webpackChunkName: "aside'"*/ '@/pages/components/aside'));
// const RadioCardsPage = lazy(() => import(/* webpackChunkName: "radio-cards'"*/ '@/pages/components/radio-cards'));
// const BusinessBasicPage = lazy(() => import(/* webpackChunkName: "basic-page" */ '@/pages/business/basic'));
// const BusinessWithSearchPage = lazy(() => import(/* webpackChunkName: "with-search" */ '@/pages/business/with-search'));
// const BusinessWithAsidePage = lazy(() => import(/* webpackChunkName: "with-aside" */ '@/pages/business/with-aside'));
// const BusinessWithRadioCardsPage = lazy(
//     () => import(/* webpackChunkName: "with-aside" */ '@/pages/business/with-radio-cards')
// );
// const BusinessWithTabsPage = lazy(() => import(/* webpackChunkName: "with-tabs" */ '@/pages/business/with-tabs'));

const routeList: PartialRouteObject[] = [
    {
        path: 'login',
        element: <RouteWrapper element={<LoginPage/>} titleId="title.login"/>
    }, {
        path: '/',
        element: <RouteWrapper element={<LayoutPage/>} titleId="title.home" auth/>,
        children: [
            {
                path: 'dashboard',
                element: <RouteWrapper element={<DashBoardPage/>} titleId="title.dashboard"/>
            }, {
                path: 'documentation',
                element: <RouteWrapper element={<Documentation/>} titleId="title.documentation"/>
            },{
                path: 'guide',
                element: <RouteWrapper element={<Guide />} titleId="title.guide" />
            },
            {
                path: 'permission/route',
                element: <RouteWrapper element={<RoutePermission />} titleId="title.permission.route" auth />
            },
            {
                path: 'permission/button',
                element: <RouteWrapper element={<ButtonPermission />} titleId="title.permission.button" />
            },
            {
                path: 'component/form',
                element: <RouteWrapper element={<FormPage />} titleId="title.account" />
            },
            {
                path: 'component/table',
                element: <RouteWrapper element={<TablePage />} titleId="title.account" />
            },
            {
                path: 'component/search',
                element: <RouteWrapper element={<SearchPage />} titleId="title.account" />
            },
            {
                path: 'component/tabs',
                element: <RouteWrapper element={<TabsPage />} titleId="title.account" />
            },
            {
                path: 'component/aside',
                element: <RouteWrapper element={<AsidePage />} titleId="title.account" />
            },
            {
                path: 'component/radio-cards',
                element: <RouteWrapper element={<RadioCardsPage />} titleId="title.account" />
            },
            {
                path: 'business/basic',
                element: <RouteWrapper element={<BusinessBasicPage />} titleId="title.account" />
            },
            {
                path: 'business/with-search',
                element: <RouteWrapper element={<BusinessWithSearchPage />} titleId="title.account" />
            },
            {
                path: 'business/with-aside',
                element: <RouteWrapper element={<BusinessWithAsidePage />} titleId="title.account" />
            },
            {
                path: 'business/with-radio-cards',
                element: <RouteWrapper element={<BusinessWithRadioCardsPage />} titleId="title.account" />
            },
            {
                path: 'business/with-tabs',
                element: <RouteWrapper element={<BusinessWithTabsPage />} titleId="title.account" />
            },
            {
                path: '*',
                element: <RouteWrapper element={<NotFound />} titleId="title.notFount" />
            }
        ]
    }
];

const RenderRouter: FC = () => {
    return useRoutes(routeList);
};

export default RenderRouter;
