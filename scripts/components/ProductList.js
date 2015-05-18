'use strict';

import React from 'react/addons';

const ProductList = React.createClass({
    propTypes: {
        products: React.PropTypes.array
    },

    render() {
        return (
            <ul className='products small-block-grid-3'>
                {this.props.products.map((product) => {
                    return (<li key={product.code} className='tile'>
                        <div className=''>
                            <div className='small-12 columns'>
                                <strong>{product.name}</strong>
                            </div>
                            <div className='small-12 columns'>
                                <small>{product.code}</small>
                            </div>
                            <div className='small-12 columns'>
                                <img src='http://placehold.it/200x200' />
                            </div>
                            <div className='small-12 columns'>
                                {product.price.formattedValue}
                            </div>
                        </div>
                    </li>);
                })}
            </ul>
        );
    }
});

module.exports = ProductList;

