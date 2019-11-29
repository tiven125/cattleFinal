export const ROUTES = [
    { path: '/home', title: 'Home', icon: 'ft-layout', class: '', badge: '', badgeClass: '', isExternalLink: false, submenu: [] },
    { path: '/ganadero/ganaderocreate', title: 'Ganadero', icon: 'ft-layout', class: '', badge: '', badgeClass: '', isExternalLink: false, submenu: [] },
    { path: '/peso/pesokilocreate', title: ' Peso', icon: 'ft-layout', class: '', badge: '', badgeClass: '', isExternalLink: false, submenu: [] },
    { path: '/lote/lotecreate', title: ' Lote', icon: 'ft-layout', class: '', badge: '', badgeClass: '', isExternalLink: false, submenu: [] },
    { path: '/bovino/bovinocreate', title: ' Bovino', icon: 'ft-layout', class: '', badge: '', badgeClass: '', isExternalLink: false, submenu: [] },
    { path: '', title: 'Menu Reto', icon: '', class: 'has-sub', badge: '', badgeClass: '', isExternalLink: false,
        submenu: [
            { path: '/components/carousel', title: 'Carrusel', icon: 'ft-layout', class: '', badge: '', badgeClass: '', isExternalLink: false, submenu: [] },
            { path: '/components/videoembebido', title: 'Video Embebido', icon: 'ft-square', class: '', badge: '', badgeClass: '', isExternalLink: false, submenu: [] },
            { path: '/components/mapa', title: 'Mapa', icon: 'ft-file', class: '', badge: '', badgeClass: '', isExternalLink: false, submenu: [] },
            { path: '/components/editor', title: 'Editor Texto', icon: 'ft-file', class: '', badge: '', badgeClass: '', isExternalLink: false, submenu: [] },
            { path: '/components/prueba', title: 'list prueba', icon: 'ft-file', class: '', badge: '', badgeClass: '', isExternalLink: false, submenu: [] },
        ]
    },
    { path: '', title: 'User', icon: '', class: 'has-sub', badge: '', badgeClass: '', isExternalLink: false,
        submenu: [
            { path: '/user/register', title: 'Registro', icon: 'ft-layout', class: '', badge: '', badgeClass: '', isExternalLink: false, submenu: [] },
            { path: '/user/login', title: 'Login', icon: 'ft-square', class: '', badge: '', badgeClass: '', isExternalLink: false, submenu: [] },
            { path: '/user/profile', title: 'Perfil', icon: 'ft-file', class: '', badge: '', badgeClass: '', isExternalLink: false, submenu: [] },
        ]
    },
];
//# sourceMappingURL=sidebar-routes.config.js.map