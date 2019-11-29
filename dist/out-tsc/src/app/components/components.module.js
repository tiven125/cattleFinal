import * as tslib_1 from "tslib";
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
import { SmartDataTableComponent } from './smart-data-table/smart-data-table.component';
import { QuillModule } from 'ngx-quill';
import { GoogleMapComponent } from './google-map/google-map.component';
import { AgmCoreModule } from '@agm/core';
import { Ng2SmartTableModule } from 'ng2-smart-table';
import { EditorComponent } from './editor/editor.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
let ComponentsModule = class ComponentsModule {
};
ComponentsModule = tslib_1.__decorate([
    NgModule({
        declarations: [CarouselComponent, VideoComponent, SmartDataTableComponent, EditorComponent, GoogleMapComponent],
        imports: [
            CommonModule,
            ComponentsRoutingModule,
            NgbModule,
            VgCoreModule,
            VgControlsModule,
            VgOverlayPlayModule,
            VgBufferingModule,
            Ng2SmartTableModule,
            QuillModule,
            FormsModule,
            ReactiveFormsModule,
            AgmCoreModule
        ]
    })
], ComponentsModule);
export { ComponentsModule };
//# sourceMappingURL=components.module.js.map