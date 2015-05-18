'use strict';

import React from 'react/addons';
import App from './App';
import Router from 'react-router';
import ProductListingPage from './pages/ProductListingPage';
import Fluxible from 'fluxible';
import ProductStore from './stores/ProductStore';

const routes = (
    <Route handler={App} path="/">
        <DefaultRoute name="home" handler={Home} />
        <Route name="products" handler={ProductListingPage} />
    </Route>
);

const app = new Fluxible({
    component: routes
});

app.registerStore(ProductStore);


window.context = app.createContext();
const router = Router.create({
    routes: app.getComponent(),
    location: Router.HistoryLocation,
});

router.run((Handler) => {
    React.render(<Handler/>, document.getElementById('app'));
});
