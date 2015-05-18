'use strict';

import React from 'react/addons';

const Dummy = React.createClass({
    getInitialState() {
        return {
            color: 'red'
        };
    },

    render() {
        return (
            <div>
                Dummy
            </div>
        );
    }
});

module.exports = Dummy;

