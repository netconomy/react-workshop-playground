'use strict';

import WebAPIUtils from '../utils/WebAPIUtils';
import ActionTypes from '../constants/ActionTypes';

module.exports = (context, payload, done) => {
    context.dispatch(ActionTypes.QUERY_PRODUCTS_PAGE);
    WebAPIUtils.getProducts().then((data) => {
        context.dispatch(ActionTypes.QUERY_PRODUCTS_PAGE_SUCCESS, data);
    }).catch((error) => {
        context.dispatch(ActionTypes.QUERY_PRODUCTS_PAGE_FAILURE, error);
    }).then(() => {
        done();
    });
};

