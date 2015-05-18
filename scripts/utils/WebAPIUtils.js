const _productData = {
    "pagination": {
        "currentPage": 0,
        "pageSize": 20,
        "sort": "price-asc",
        "totalPages": 4,
        "totalResults": 71
    },
    "products": [{
        "averageRating": 3.5,
        "code": "784173",
        "description": "<b>Amazing quality prints with 8.0 MP</b><br/>- 8.0 MP means...",
        "manufacturer": "Kodak",
        "name": "EasyShare V 803 White Glaze",
        "price": {
            "currencyIso": "USD",
            "formattedValue": "$90.00",
            "priceType": "BUY",
            "value": 90.0
        },
        "stock": {
            "stockLevelStatus": "inStock"
        },
        "summary": "EasyShare V 803",
        "url": "/Open-Catalogue/Cameras/Digital-Cameras/Digital-Compacts/EasyShare-V-803-White-Glaze/p/784173"
    }, {
        "averageRating": 3.6666666666666665,
        "code": "1992697",
        "description": "- 10.1 effective megapixels resolution for high quality images...",
        "manufacturer": "Sony",
        "name": "DSC-S930",
        "price": {
            "currencyIso": "USD",
            "formattedValue": "$91.51",
            "priceType": "BUY",
            "value": 91.51
        },
        "stock": {
            "stockLevel": 4,
            "stockLevelStatus": "lowStock"
        },
        "summary": "DSC-S930 - Excellent value, easy to use camera with high 10.1 ...",
        "url": "/Open-Catalogue/Cameras/Digital-Cameras/Digital-Compacts/DSC-S930/p/1992697"
    }]
};

module.exports = {
    getProducts() {
        return new Promise((resolve) => {
            window.setTimeout(() => {
                resolve(_productData);
            }, 1000);
        });
    }
};
