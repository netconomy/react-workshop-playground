'use strict';

import React from 'react/addons';
import {Link} from 'react-router';

const Home = React.createClass({
    render() {
        return (
            <div>
                Home <Link to='products'>Productlist</Link>
            </div>
        );
    }
});

module.exports = Home;

