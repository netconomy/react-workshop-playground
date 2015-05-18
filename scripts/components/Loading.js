'use strict';

import React from 'react/addons';

const Loading = React.createClass({
    getInitialState() {
        return {};
    },

    render() {
        return (
            <div className='spinner'>
                <div className="dot1"></div>
                <div className="dot2"></div>
            </div>
        );
    }
});

module.exports = Loading;


