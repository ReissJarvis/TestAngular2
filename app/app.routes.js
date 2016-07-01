"use strict";
var router_1 = require('@angular/router');
var item_component_1 = require('./Items/item.component');
var dashboard_component_1 = require('./dashboard.component');
var routes = [
    {
        path: 'dashboard',
        component: dashboard_component_1.DashboardComponent
    },
    {
        path: '',
        redirectTo: '/dashboard',
        terminal: true
    },
    {
        path: 'items',
        component: item_component_1.ItemComponent
    }
];
exports.APP_ROUTER_PROVIDERS = [
    router_1.provideRouter(routes)
];
//# sourceMappingURL=app.routes.js.map