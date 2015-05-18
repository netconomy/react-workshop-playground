'use strict';

import React from 'react/addons';
import ProductStore from '../stores/ProductStore';
import ProductList from '../components/ProductList';

const App = React.createClass({
    mixins: [React.addons.PureRenderMixin],

    getInitialState() {
        return {
            page: ProductStore.getCurrentPage()
        };
    },

    render() {
        return (
            <div>
                <div>Page: {this.state.page.pagination.currentPage}</div>
                <ProductList products={this.state.page.get('products')} />
            </div>
        );
    },

    componentDidMount() {
        ProductStore.addChangeListener(this._onChange);
    },

    componentWillUnmount() {
        ProductStore.removeChangeListener(this._onChange);
    },

    _onChange() {
        this.setState({
            page: ProductStore.getCurrentPage()
        });
    }
});

module.exports = App;

