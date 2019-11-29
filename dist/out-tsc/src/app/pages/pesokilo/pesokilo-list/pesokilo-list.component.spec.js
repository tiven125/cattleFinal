import { async, TestBed } from '@angular/core/testing';
import { PesokiloListComponent } from './pesokilo-list.component';
describe('PesokiloListComponent', () => {
    let component;
    let fixture;
    beforeEach(async(() => {
        TestBed.configureTestingModule({
            declarations: [PesokiloListComponent]
        })
            .compileComponents();
    }));
    beforeEach(() => {
        fixture = TestBed.createComponent(PesokiloListComponent);
        component = fixture.componentInstance;
        fixture.detectChanges();
    });
    it('should create', () => {
        expect(component).toBeTruthy();
    });
});
//# sourceMappingURL=pesokilo-list.component.spec.js.map