'use strict';

import React from 'react/addons';
import Router from 'react-router';
import provideContext from 'fluxible/addons/provideContext';
import Menu from './components/Menu';

const RouteHandler = Router.RouteHandler;

const App = React.createClass({
    render() {
        return (
            <div className='app row'>
                <Menu />
                <RouteHandler />
            </div>
        );
    }
});

const Application = provideContext(App);
module.exports = Application;

