//Route for content layout with sidebar, navbar and footer
export const Full_ROUTES = [
    {
        path: 'changelog',
        loadChildren: () => import('../../changelog/changelog.module').then(m => m.ChangeLogModule)
    },
    {
        path: 'full-layout',
        loadChildren: () => import('../../pages/full-layout-page/full-pages.module').then(m => m.FullPagesModule)
    },
    {
        path: 'home',
        loadChildren: () => import('../../pages/home/home.module').then(m => m.HomeModule)
    },
    {
        path: 'components',
        loadChildren: () => import('../../components/components.module').then(m => m.ComponentsModule)
    },
    {
        path: 'bovino',
        loadChildren: () => import('../../pages/bovino/bovino.module').then(m => m.BovinoModule)
    },
    {
        path: 'ganadero',
        loadChildren: () => import('../../pages/ganadero/ganadero.module').then(m => m.GanaderoModule)
    },
    {
        path: 'lote',
        loadChildren: () => import('../../pages/lote/lote.module').then(m => m.LoteModule)
    },
    {
        path: 'peso',
        loadChildren: () => import('../../pages/pesokilo/pesokilo.module').then(m => m.PesokiloModule)
    },
    {
        path: 'product',
        loadChildren: () => import('../../pages/product/product.module').then(m => m.ProductModule)
    },
];
//# sourceMappingURL=full-layout.routes.js.map