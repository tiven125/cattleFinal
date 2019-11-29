import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ComponentsRoutingModule } from './components-routing.module';
import { CarouselComponent } from './carousel/carousel.component';
import { VideoComponent } from './video/video.component';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';  
import { VgCoreModule } from 'videogular2/core';
import { VgControlsModule } from 'videogular2/controls';
import { VgOverlayPlayModule } from 'videogular2/overlay-play';
import { VgBufferingModule } from 'videogular2/buffering';
import { QuillModule } from 'ngx-quill'
import { GoogleMapComponent } from './google-map/google-map.component';
import { AgmCoreModule } from '@agm/core';



import { EditorComponent } from './editor/editor.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';

@NgModule({
  declarations: [CarouselComponent, VideoComponent,EditorComponent,GoogleMapComponent],
  imports: [
    CommonModule,
    ComponentsRoutingModule,
    NgbModule,
    VgCoreModule,
    VgControlsModule,
    VgOverlayPlayModule,
    VgBufferingModule,
    QuillModule,
    FormsModule,
    ReactiveFormsModule,
    AgmCoreModule
    
  ]  
})

export class ComponentsModule { }
