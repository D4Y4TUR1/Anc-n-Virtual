const { createProxyMiddleware } = require('http-proxy-middleware');

module.exports = function (app) {
    app.use(
        '/api/openrouteservice',
        createProxyMiddleware({
            target: 'https://api.openrouteservice.org',
            changeOrigin: true,
            pathRewrite: {
                '^/api/openrouteservice': '', // Quita el prefijo de la URL
            },
        })
    );
};
