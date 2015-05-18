'use strict';

import createStore from 'fluxible/addons/createStore';

const ProductStore = createStore({
    storeName: 'ProductStore',
    handlers: {
        'QUERY_PRODUCTS_PAGE_SUCCESS': '_handleQueryProductPageSuccess',
        'QUERY_PRODUCTS_PAGE_FAILURE': '_handleQueryProductPageFailure'
    },

    getCurrentPage() {
        return this.page;
    },

    getError() {
        return this.error;
    },

    _handleQueryProductPageSuccess(page) {
        this.page = page;
        this.emitChange();
    },

    _handleQueryProductPageFailure(error) {
        this.error = error;
        this.emitChange();
    },

    initialize() {
        this.page = null;
        this.error = null;
    }
});

module.exports = ProductStore;

