'use strict';

import Dispatcher from '../Dispatcher';
import ActionTypes from '../constants/ActionTypes';
import APIUtils from '../utils/APIUtils';

module.exports = (config) => {
    Dispatcher.handleAction({
        type: ActionTypes.FETCH_DATA
    });

    APIUtils.fetchData(config).then((data) => {
        const result = {
            config,
            data
        };
        Dispatcher.handleAction({
            type: ActionTypes.FETCH_DATA_SUCCESS,
            data: result
        });
    }).catch((error) => {
        Dispatcher.handleAction({
            type: ActionTypes.FETCH_DATA_FAILURE,
            error
        });
    });
};

