'use strict';

import React from 'react/addons';
import ProductStore from '../stores/ProductStore';
import ProductList from '../components/ProductList';
import FluxibleMixin from 'fluxible/addons/FluxibleMixin';
import GetProductsAction from '../actions/GetProductsAction';
import Loading from '../components/Loading';

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

    render() {
        if (!this.state.page) {
            return <Loading />;
        }

        return (
            <div>
                <div>Page: {this.state.page.pagination.currentPage}</div>
                <ProductList products={this.state.page.products} />
            </div>
        );
    },

    componentDidMount() {
        this.executeAction(GetProductsAction);
    },

    _onChange() {
        this.setState({
            page: this.getStore(ProductStore).getCurrentPage()
        });
    }
});

module.exports = ProductListingPage;

