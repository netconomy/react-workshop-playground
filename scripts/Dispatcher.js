'use strict';

import {Dispatcher} from 'flux';
import assign from 'object-assign';

const AppDispatcher = assign(new Dispatcher(), {
    handleAction(action) {
        this.dispatch(action);
    }
});

module.exports = AppDispatcher;

