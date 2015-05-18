'use strict';

import React from 'react/addons';
import ProductStore from '../stores/ProductStore';
import ProductList from '../components/ProductList';
import FluxibleMixin from 'fluxible/addons/FluxibleMixin';
import GetProductsAction from '../actions/GetProductsAction';

const ProductListingPage = React.createClass({
    mixins: [FluxibleMixin],

    statics: {
        storeListeners: {
            _onChange: [ProductStore]
        }
    },

    getInitialState() {
        return {
            page: this.getStore(ProductStore).getCurrentPage()
        };
    },

    _getProducts() {
        this.executeAction(GetProductsAction);
    },

    render() {
        if (!this.state.page) {
            return <button onClick={this._getProducts}>get products</button>;
        }

        return (
            <div>
                <div>Page: {this.state.page.pagination.currentPage}</div>
                <ProductList products={this.state.page.products} />
                yay
            </div>
        );
    },

    _onChange() {
        this.setState({
            page: this.getStore(ProductStore).getCurrentPage()
        });
    }
});

module.exports = ProductListingPage;

