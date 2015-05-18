'use strict';

import Dispatcher from '../Dispatcher';
import ActionTypes from '../constants/ActionTypes';
import StoreListenerMixin from '../mixins/StoreListenerMixin.js';
import assign from 'object-assign';
import Immutable from 'immutable';

let _page = Immutable.fromJS({
    "pagination" : {
        "currentPage" : 0,
        "pageSize" : 20,
        "sort" : "price-asc",
        "totalPages" : 4,
        "totalResults" : 71
    },
    "products" : [ {
        "averageRating" : 3.5,
        "code" : "784173",
        "description" : "<b>Amazing quality prints with 8.0 MP</b><br/>- 8.0 MP means you can make stunning prints up to 30 Ã— 40 in. (76 Ã— 102 cm)<br/>- Capture bright, beautiful color with KODAK Color Science<br/>- However you choose to printâ€”at home, at retail, or onlineâ€”trust Kodak for picture quality thatâ€™s truly exceptional and for memories that will last<br/><br/><b>3X optical zoom lens</b><br/>- The KODAK RETINAR 3X Optical Aspheric All Glass Lens captures crisp details<br/>- 3X optical zoom (35 mm equivalent: 36â€“108 mm) gets you closer to your subjects without reducing image quality<br/>- 4X digital zoom enlarges your pictures even more<br/><br/><b>Make a statement</b><br/>The V803 is all about fun. Fresh colors. Dynamic ways to personalize. Capture the world your way with the V803.<br/>- Customize your experience with on-camera settings<br/>- Keep special pictures close with the Favorites feature<br/>- Make a statementâ€”choose from many fresh camera colors and a range of fun accessories",
        "manufacturer" : "Kodak",
        "name" : "EasyShare V 803 White Glaze",
        "price" : {
            "currencyIso" : "USD",
            "formattedValue" : "$90.00",
            "priceType" : "BUY",
            "value" : 90.0
        },
        "stock" : {
            "stockLevelStatus" : "inStock"
        },
        "summary" : "EasyShare V 803",
        "url" : "/Open-Catalogue/Cameras/Digital-Cameras/Digital-Compacts/EasyShare-V-803-White-Glaze/p/784173"
    }, {
        "averageRating" : 3.6666666666666665,
        "code" : "1992697",
        "description" : "- 10.1 effective megapixels resolution for high quality imaging and detail-packed enlargements.<br/>- 3x optical zoom lens.<br/>- Face Detection optimizes focus and exposure for clearer portraits.<br/>- SteadyShot image stabilization reduces image blur du",
        "manufacturer" : "Sony",
        "name" : "DSC-S930",
        "price" : {
            "currencyIso" : "USD",
            "formattedValue" : "$91.51",
            "priceType" : "BUY",
            "value" : 91.51
        },
        "stock" : {
            "stockLevel" : 4,
            "stockLevelStatus" : "lowStock"
        },
        "summary" : "DSC-S930 - Excellent value, easy to use camera with high 10.1 megapixel resolution. 3x optical zoom lens, 2.4-inch screen, Face Detection and SteadyShot",
        "url" : "/Open-Catalogue/Cameras/Digital-Cameras/Digital-Compacts/DSC-S930/p/1992697"
    }]
});

const ProductStore = assign({}, StoreListenerMixin, {
    getCurrentPage() {
        return _page;
    }
});

ProductStore.dispatchToken = Dispatcher.register((action) => {
    switch (action.type) {
        case ActionTypes.GET_INITIAL_DATA_SUCCESS:
    }
    ProductStore.emitChange();
});

module.exports = ProductStore;

