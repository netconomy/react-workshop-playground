'use strict';

import React from 'react/addons';
import {Link} from 'react-router';

const Menu = React.createClass({
    contextTypes: {
        router: React.PropTypes.func.isRequired
    },

    _goBack() {
        this.context.router.goBack();
    },

    render() {
        return (
            <div className="icon-bar four-up">
                <a onClick={this._goBack} className="item">
                    <i className='icon ion-arrow-left-a'/>
                    <label>Back</label>
                </a>
                <Link to='/' className="item">
                    <i className='icon ion-home'/>
                    <label>Home</label>
                </Link>
                <Link to='/products' className="item">
                    <i className='icon ion-paper-airplane'/>
                    <label>Products</label>
                </Link>
                <Link to='/dummy' className="item">
                    <i className='icon ion-paper-airplane'/>
                    <label>Dummy</label>
                </Link>
            </div>
        );
    }
});

module.exports = Menu;

