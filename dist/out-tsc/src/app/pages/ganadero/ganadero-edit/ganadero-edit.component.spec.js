import { async, TestBed } from '@angular/core/testing';
import { GanaderoEditComponent } from './ganadero-edit.component';
describe('GanaderoEditComponent', () => {
    let component;
    let fixture;
    beforeEach(async(() => {
        TestBed.configureTestingModule({
            declarations: [GanaderoEditComponent]
        })
            .compileComponents();
    }));
    beforeEach(() => {
        fixture = TestBed.createComponent(GanaderoEditComponent);
        component = fixture.componentInstance;
        fixture.detectChanges();
    });
    it('should create', () => {
        expect(component).toBeTruthy();
    });
});
//# sourceMappingURL=ganadero-edit.component.spec.js.map