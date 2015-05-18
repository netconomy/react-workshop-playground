'use strict';

import React from 'react/addons';

const ProductList = React.createClass({
    render() {
        return (
            <div className='products'>
                {this.props.products.map((product) => {
                    return <div key={product.code}>{product.name}</div>;
                })}
            </div>
        );
    }
});

module.exports = ProductList;

