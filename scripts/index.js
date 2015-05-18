'use strict';

import React from 'react/addons';
import App from './App';
import Router from 'react-router';
import ProductListingPage from './pages/ProductListingPage';
import Home from './pages/Home';
import Fluxible from 'fluxible';
import ProductStore from './stores/ProductStore';
import Dummy from './pages/Dummy';

const Route = Router.Route,
DefaultRoute = Router.DefaultRoute;


const routes = (
    <Route handler={App} path="/">
        <DefaultRoute name="home" handler={Home} />
        <Route name="products" handler={ProductListingPage} />
        <Route name="dummy" handler={Dummy} />
    </Route>
);

const app = new Fluxible({
    component: routes
});

app.registerStore(ProductStore);


window.context = app.createContext();
const router = Router.create({
    routes: app.getComponent(),
    location: Router.HashLocation
});

router.run((Handler) => {
    React.render(<Handler context={window.context.getComponentContext()}/>, document.getElementById('app'));
});
