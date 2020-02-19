import React, {Component} from 'react';
import HomePage from "./pages/HomePage/HomePage";
import ProductListPage from "./pages/ProductListPage/ProductListPage";
import NotFoundPage from "./pages/NotFoundPage/NotFoundPage";
import {Route, Switch} from "react-router-dom";
import ProductActionPage from "./pages/ProductActionPage/ProductActionPage";

const routes = [
    {
        path: '//',
        extract: true,
        component: () => <HomePage />
    },
    {
        path: '/products/edit/:id',
        extract: false,
        component: ({match, history}) => <ProductActionPage match={match} history={history} />
    },
    {
        path: '/products/add',
        extract: false,
        component: ({history}) => <ProductActionPage history={history} />
    },
    {
        path: '/products',
        extract: false,
        component: () => <ProductListPage />
    },
    {
        path: '',
        extract: false,
        component: () => <NotFoundPage />
    },
];

class Routes extends Component{
    render() {
        return (
            <Switch>
                { this.showRouteMenus(routes) }
            </Switch>
        );
    }

    showRouteMenus = (routes) => {
        let result = null;
        if(routes.length > 0){
            result = routes.map((route, index) => {
                return (
                    <Route
                        key={index}
                        path={route.path}
                        exact={route.exact}
                        component={route.component}
                    />
                );
            });
        }
        return result;
    }
}

export default Routes;