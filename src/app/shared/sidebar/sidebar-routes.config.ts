import { RouteInfo } from './sidebar.metadata';

export const ROUTES: RouteInfo[] = [

    {path: '/home', title: 'Home', icon: 'ft-thumbs-up', class: '', badge: '', badgeClass: '', isExternalLink: false, submenu: []},
    {path: '/ganadero/ganaderocreate', title: 'Ganadero', icon: 'ft-thumbs-up', class: '', badge: '', badgeClass: '', isExternalLink: false, submenu: []},
    {path: '/peso/pesokilocreate', title: ' Peso', icon: 'ft-thumbs-up', class: '', badge: '', badgeClass: '', isExternalLink: false, submenu: []},
    {path: '/lote/lotecreate', title: ' Lote', icon: 'ft-thumbs-up', class: '', badge: '', badgeClass: '', isExternalLink: false, submenu: []},
    {path: '/bovino/bovinocreate', title: ' Bovino', icon: 'ft-thumbs-up', class: '', badge: '', badgeClass: '', isExternalLink: false, submenu: []},


    { path: '', title: 'Menu Reto', icon: '', class: 'has-sub', badge: '', badgeClass: '', isExternalLink: false,
    submenu: [
        {path: '/components/carousel', title: 'Carrusel', icon: 'ft-layout', class: '', badge: '', badgeClass: '', isExternalLink: false, submenu: []},
        {path: '/components/videoembebido', title: 'Video Embebido', icon: 'ft-square', class: '', badge: '', badgeClass: '', isExternalLink: false, submenu: []},
        {path: '/components/mapa', title: 'Mapa', icon: 'ft-file', class: '', badge: '', badgeClass: '', isExternalLink: false, submenu: []},
        {path: '/components/editor', title: 'Editor Texto', icon: 'ft-file', class: '', badge: '', badgeClass: '', isExternalLink: false, submenu: []},

    ]
},



];
