require('core-js/es5');
var context = require.context('.', true, /spec\.js$/);
context.keys().forEach(context);
