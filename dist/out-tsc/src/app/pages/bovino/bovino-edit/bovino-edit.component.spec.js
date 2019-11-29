import { async, TestBed } from '@angular/core/testing';
import { BovinoEditComponent } from './bovino-edit.component';
describe('BovinoEditComponent', () => {
    let component;
    let fixture;
    beforeEach(async(() => {
        TestBed.configureTestingModule({
            declarations: [BovinoEditComponent]
        })
            .compileComponents();
    }));
    beforeEach(() => {
        fixture = TestBed.createComponent(BovinoEditComponent);
        component = fixture.componentInstance;
        fixture.detectChanges();
    });
    it('should create', () => {
        expect(component).toBeTruthy();
    });
});
//# sourceMappingURL=bovino-edit.component.spec.js.map