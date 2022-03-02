require = require('esm')(module);
const { routes } = require('./src/router/routes');
 
module.exports = {
    pluginOptions: {
        sitemap: {
            baseURL: 'https://degovan.com',
            routes,
        }
    }
}