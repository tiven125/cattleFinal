import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Routes, RouterModule } from '@angular/router';
import { CarouselComponent } from './carousel/carousel.component';
import { VideoComponent } from './video/video.component';
import { EditorComponent } from './editor/editor.component';
import { GoogleMapComponent } from './google-map/google-map.component';

const routes: Routes = [
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

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class ComponentsRoutingModule { }
