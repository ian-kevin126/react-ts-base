import React, {FC, lazy} from "react";
import RouteWrapper from "@/routes/RouteWrapper";
import {PartialRouteObject, useRoutes} from "react-router-dom";
import NotFound from "@/pages/error/NotFound";

const LoginPage = lazy(() => import(/* webpackChunkName: "login'"*/ '@/pages/login'))
const DashBoardPage = lazy(() => import(/* webpackChunkName: "dashboard'"*/ '@/pages/dashboard'))
const LayoutPage = lazy(() => import(/* webpackChunkName: "dashboard'"*/ '@/pages/layout'))

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
            }
        ]
    }, {path: '*', element: <NotFound/>}
]

const RenderRouter: FC = () => {
    return useRoutes(routeList);
};

export default RenderRouter;
