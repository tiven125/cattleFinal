import * as tslib_1 from "tslib";
import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';
import { CarouselComponent } from './carousel/carousel.component';
import { VideoComponent } from './video/video.component';
import { SmartDataTableComponent } from './smart-data-table/smart-data-table.component';
import { EditorComponent } from './editor/editor.component';
import { GoogleMapComponent } from './google-map/google-map.component';
const routes = [
    {
        path: '',
        children: [
            {
                path: 'carousel',
                component: CarouselComponent,
                data: {
                    title: 'Carrusel'
                }
            }, {
                path: 'videoembebido',
                component: VideoComponent,
                data: {
                    title: 'Video Embebido'
                }
            },
            {
                path: 'prueba',
                component: SmartDataTableComponent,
                data: {
                    title: 'Editor Html'
                }
            },
            {
                path: 'editor',
                component: EditorComponent,
                data: {
                    title: 'Editor Html'
                }
            },
            {
                path: 'mapa',
                component: GoogleMapComponent,
                data: {
                    title: 'Editor Html'
                }
            }
        ]
    }
];
let ComponentsRoutingModule = class ComponentsRoutingModule {
};
ComponentsRoutingModule = tslib_1.__decorate([
    NgModule({
        imports: [RouterModule.forChild(routes)],
        exports: [RouterModule],
    })
], ComponentsRoutingModule);
export { ComponentsRoutingModule };
//# sourceMappingURL=components-routing.module.js.map