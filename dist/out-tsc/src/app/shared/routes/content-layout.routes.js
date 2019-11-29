//Route for content layout without sidebar, navbar and footer for pages like Login, Registration etc...
export const CONTENT_ROUTES = [
    {
        path: 'content-layout',
        loadChildren: () => import('../../pages/content-layout-page/content-pages.module').then(m => m.ContentPagesModule)
    },
    {
        path: 'user',
        loadChildren: () => import('../../user/user.module').then(m => m.UserModule)
    },
];
//# sourceMappingURL=content-layout.routes.js.map