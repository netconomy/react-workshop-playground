import React from 'react/addons';
import App from '../scripts/App';

let TestUtils = React.addons.TestUtils;

describe('App', function() {
    it('gets rendered successfully', function() {
        let app = TestUtils.renderIntoDocument(<App/>);
        let appClass = TestUtils.findRenderedDOMComponentWithClass(app, 'app');
        expect(appClass).not.toBeUndefined();
        expect(TestUtils.isCompositeComponent(app)).toBe(true);
    });
});
