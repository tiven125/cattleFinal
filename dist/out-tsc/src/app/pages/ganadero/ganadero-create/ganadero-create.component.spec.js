import { async, TestBed } from '@angular/core/testing';
import { GanaderoCreateComponent } from './ganadero-create.component';
describe('GanaderoCreateComponent', () => {
    let component;
    let fixture;
    beforeEach(async(() => {
        TestBed.configureTestingModule({
            declarations: [GanaderoCreateComponent]
        })
            .compileComponents();
    }));
    beforeEach(() => {
        fixture = TestBed.createComponent(GanaderoCreateComponent);
        component = fixture.componentInstance;
        fixture.detectChanges();
    });
    it('should create', () => {
        expect(component).toBeTruthy();
    });
});
//# sourceMappingURL=ganadero-create.component.spec.js.map