'use strict';

import React from 'react/addons';
import

const App = React.createClass({
    mixins: [React.addons.PureRenderMixin],

    render() {
        return (
            <div className='products'>
                {this.state.page.get('products').map((product) => {

                })}
            </div>
        );
    }
});

module.exports = App;

